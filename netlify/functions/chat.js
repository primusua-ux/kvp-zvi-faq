const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

// Google occasionally returns 503 "high demand" during load spikes and explicitly
// recommends retrying. A sustained spike can outlast a same-model retry, so after
// one retry we fall back to a second model with its own separate capacity pool.
// ponytail: fixed 2-model list, not a config option - add a third only if this pair
// also proves insufficient.
const MODEL_CANDIDATES = ['gemini-flash-latest', 'gemini-flash-lite-latest'];

// A hung Gemini call used to block the whole function with no time limit, so a slow
// response burned the entire Netlify execution budget on one model instead of giving
// the fallback model a chance. Each attempt now gets its own budget instead.
// ponytail: fixed 8s per attempt, no retry on timeout (only on a fast 503) - raise if
// legitimate answers start getting cut off.
const CALL_TIMEOUT_MS = 8000;

function isRetryableError(error) {
    const msg = String((error && error.message) || error || '');
    return msg.includes('"code":503') || msg.includes('UNAVAILABLE') || msg.includes('overloaded');
}

function isTimeoutError(error) {
    return error && error.message === 'TIMEOUT';
}

function withTimeout(promise, ms) {
    promise.catch(() => {});
    return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error('TIMEOUT')), ms))
    ]);
}

async function sendWithRetry(chat, message, maxRetries = 1) {
    for (let attempt = 0; ; attempt++) {
        try {
            return await withTimeout(chat.sendMessage({ message }), CALL_TIMEOUT_MS);
        } catch (error) {
            if (attempt >= maxRetries || !isRetryableError(error)) throw error;
            await new Promise(resolve => setTimeout(resolve, 800));
        }
    }
}

async function sendWithFallback(ai, systemPrompt, formattedHistory, message) {
    let lastError;
    for (const model of MODEL_CANDIDATES) {
        const chat = ai.chats.create({
            model,
            config: { systemInstruction: systemPrompt },
            history: formattedHistory
        });
        try {
            return await sendWithRetry(chat, message);
        } catch (error) {
            if (!isRetryableError(error) && !isTimeoutError(error)) throw error;
            lastError = error;
        }
    }
    throw lastError;
}

exports.handler = async (event, context) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: 'Method Not Allowed' };
    }

    try {
        const { message, history } = JSON.parse(event.body);

        if (!message) {
            return { statusCode: 400, headers, body: 'Message is required' };
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY is not set');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'Серверна помилка: API ключ не налаштовано' })
            };
        }

        const ai = new GoogleGenAI({ apiKey });

        let knowledgeBase = '';
        try {
            const kbPath = path.resolve(__dirname, '../../chat_knowledge.md');
            if (fs.existsSync(kbPath)) {
                knowledgeBase = fs.readFileSync(kbPath, 'utf8');
            } else {
                console.warn('Knowledge base file not found at:', kbPath);
            }
        } catch (error) {
            console.error('Error reading knowledge base:', error);
        }

        const systemPrompt = `Ти - Асистент вступника, привітний помічник приймальної комісії Кафедри військової підготовки Житомирського військового інституту (ЖВІ).
Твоя мета - відповідати на запитання вступників щодо правил прийому, документів, ВЛК (військово-лікарської комісії), оплати, термінів та умов навчання.

Відповідай ВИКЛЮЧНО на основі бази знань нижче. Не додавай фактів, яких там немає, і не вигадуй відповіді.

Якщо в базі знань немає відповіді на питання:
- і питання стосується вступу на військову кафедру ЖВІ або організації навчання - повідом, що не маєш точної інформації з цього приводу, і порадь написати це питання відбірковій комісії у WhatsApp за номером 067 280 79 40;
- якщо питання взагалі не стосується вступу, військової кафедри або навчання - ввічливо відмовся відповідати, пояснивши, що консультуєш лише з питань вступу на військову кафедру ЖВІ.

Пиши лаконічно, чітко та зрозуміло. Розбивай текст на абзаци, використовуй марковані списки для кращої читабельності.

База знань (єдине джерело фактів для твоїх відповідей):
---
${knowledgeBase}
---
`;

        const formattedHistory = (history || []).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        const result = await sendWithFallback(ai, systemPrompt, formattedHistory, message);

        let replyText = 'Empty text';
        if (result.text) {
            replyText = typeof result.text === 'function' ? result.text() : result.text;
        } else if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) {
            replyText = result.candidates[0].content.parts[0].text;
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ reply: replyText })
        };

    } catch (error) {
        console.error('Error generating response:', error);

        let availableModels = "";
        try {
            const apiKey = process.env.GEMINI_API_KEY;
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
            const data = await res.json();
            if (data && data.models) {
                availableModels = "\nДоступні моделі: " + data.models.map(m => m.name.replace('models/', '')).join(', ');
            }
        } catch(e) {}

        let errorDetails = error.message;
        if (!errorDetails) {
            try { errorDetails = JSON.stringify(error); } catch(e) { errorDetails = 'Невідомий формат помилки'; }
        }

        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Помилка при обробці запиту: ' + errorDetails + availableModels })
        };
    }
};
