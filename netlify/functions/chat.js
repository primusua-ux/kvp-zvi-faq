const { GoogleGenAI } = require('@google/genai');
const fs = require('fs');
const path = require('path');

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

        const chat = ai.chats.create({
            model: 'gemini-flash-latest',
            config: {
                systemInstruction: systemPrompt
            },
            history: formattedHistory
        });

        const result = await chat.sendMessage({ message: message });

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
