export default async function (req, res) {
    if (req.method === 'POST') {
        // Handle the POST request
        const { name, message } = req.body;

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
            text: message
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to send email' });
        }
    } else {
        // Return 405 if the method is not POST
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
