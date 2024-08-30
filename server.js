import express from 'express';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.PORT || 5003;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static('public'));
app.use(express.json());

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public/index.html'));
});


// Define the /api/sendEmail route
app.post('/api/sendEmail', (req, res) => {
    const { name, message, participation } = req.body;

    if (!name || !message || !participation) {
        console.error('Missing required fields');
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'weddingmessages1403@gmail.com',
            pass: 'xuyh hpse uwll fxdh'
        }
    });

    const mailOptions = {
        from: name,
        to: 'weddingmessages1403@gmail.com',
        subject: `Message from ${name}`,
        text: `Message: ${message}\nParticipation: ${participation}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
