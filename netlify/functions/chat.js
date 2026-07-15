const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    // Handle preflight OPTIONS request
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: 'Method Not Allowed' };
    }

    try {
        const { message, history } = JSON.parse(event.body);

        if (!message) {
            return { statusCode: 400, headers, body: 'Message is required' };
        }

        // Initialize Gemini API
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY is not set');
            return {
                statusCode: 500,
                headers,
                body: JSON.stringify({ error: 'Серверна помилка: API ключ не налаштовано' })
            };
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        // Read the knowledge base
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

        // System prompt defining the bot's behavior
        const systemPrompt = `Ти - Асистент вступника, привітний помічник приймальної комісії Кафедри військової підготовки Житомирського військового інституту (ЖВІ).
Твоя мета - відповідати на запитання вступників щодо правил прийому, документів, ВЛК (військово-лікарської комісії), оплати, термінів та умов навчання.
Якщо тебе питають про щось, що не стосується вступу, військової кафедри або навчання, ввічливо відмовся відповідати, пояснивши, що ти консультуєш лише з питань вступу на військову кафедру ЖВІ.
Пиши лаконічно, чітко та зрозуміло. Розбивай текст на абзаци, використовуй марковані списки для кращої читабельності.

Ось найактуальніша інформація, яку ти ПОВИНЕН враховувати при відповідях (це твоє додаткове джерело знань):
---
${knowledgeBase}
---
`;

        // Start chat session (fallback for gemini-pro which doesn't support systemInstruction)
        const chatModel = genAI.getGenerativeModel({ 
            model: 'gemini-pro'
        });

        // Format history for Gemini
        const formattedHistory = (history || []).map((msg, index) => {
            let text = msg.text;
            if (index === 0 && msg.role === 'user') {
                text = `${systemPrompt}\n\nПитання: ${text}`;
            }
            return {
                role: msg.role === 'user' ? 'user' : 'model',
                parts: [{ text }]
            };
        });

        const chat = chatModel.startChat({
            history: formattedHistory,
        });

        const fullMessage = (formattedHistory.length === 0) 
            ? `${systemPrompt}\n\nПитання: ${message}`
            : message;

        const result = await chat.sendMessage(fullMessage);
        const responseText = result.response.text();

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ reply: responseText })
        };

    } catch (error) {
        console.error('Error generating response:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Помилка при обробці запиту: ' + error.message })
        };
    }
};
