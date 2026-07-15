const { GoogleGenAI } = require('@google/genai');
const ai = new GoogleGenAI({ apiKey: 'test_invalid_api_key' });
async function test() {
    const chat = ai.chats.create({ model: 'gemini-1.5-flash-8b' });

    const tests = [
        "hello",
        { message: "hello" },
        [{text: "hello"}],
        { parts: [{text: "hello"}] },
        { text: "hello" }
    ];

    for (let i = 0; i < tests.length; i++) {
        try {
            console.log(`\nTesting type ${i}:`, typeof tests[i]);
            await chat.sendMessage(tests[i]);
            console.log('Success for', i);
        } catch (e) {
            console.log('Failed for', i, 'with:', e.message);
        }
    }
}
test();
