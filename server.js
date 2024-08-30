app.post('/api/sendEmail', (req, res) => {
    const { name, message, participation } = req.body; // Add participation to the destructured object

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
        text: `Message: ${message}\nParticipation: ${participation}` // Include participation value
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        }
    });
});
