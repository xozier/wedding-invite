import express from 'express';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Create an instance of the express application
const app = express();
const PORT = process.env.PORT || 5003;

// Calculate __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware setup
app.use(express.static('public'));

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'weddingmessages1403@gmail.com',
            pass: 'xuyh hpse uwll fxdh'
        }
    });

    const mailOptions = {
        from: req.body.name,
        to: 'weddingmessages1403@gmail.com',
        subject: `Message from ${req.body.name}`,
        text: req.body.message // Corrected typo here
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/thanks.html');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
