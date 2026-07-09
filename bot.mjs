import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from 'qrcode-terminal';
import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize the WhatsApp Client
const client = new Client({
    authStrategy: new LocalAuth({ clientId: "punjab-ride-bot" }),
    puppeteer: {
        executablePath: await puppeteer.executablePath(),
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// Generate and display the QR Code in terminal
client.on('qr', (qr) => {
    console.log('\n=========================================');
    console.log('📱 Please scan the QR code below with your WhatsApp app');
    console.log('=========================================\n');
    qrcode.generate(qr, { small: true });
});

// When the client is authenticated and ready
client.on('ready', () => {
    console.log('\n✅ WhatsApp Bot is Ready and Connected!\n');
});

client.on('auth_failure', msg => {
    console.error('❌ Authentication failure', msg);
});

// Express API Route
app.post('/v1/messages', async (req, res) => {
    try {
        const { number, message } = req.body;
        
        if (!number || !message) {
            return res.status(400).json({ status: 'error', message: 'Missing number or message' });
        }

        console.log(`[Bot] Received request to send message to: ${number}`);

        // Validate number and get the exact WhatsApp ID
        const numberDetails = await client.getNumberId(number);
        if (!numberDetails) {
            console.error(`[Bot] Number ${number} is not registered on WhatsApp`);
            return res.status(400).json({ status: 'error', message: 'Number not registered on WhatsApp' });
        }

        const chatId = numberDetails._serialized;

        await client.sendMessage(chatId, message);
        console.log(`[Bot] Message sent successfully to ${number}`);
        
        return res.json({ status: 'success', message: 'Message sent' });
    } catch (error) {
        console.error(`[Bot] Failed to send message:`, error);
        return res.status(500).json({ status: 'error', error: error.toString() });
    }
});

// Start Express Server
const PORT = 3008;
app.listen(PORT, () => {
    console.log(`🔌 API Endpoint running at: http://localhost:${PORT}/v1/messages`);
});

// Initialize the WhatsApp client
client.initialize();
