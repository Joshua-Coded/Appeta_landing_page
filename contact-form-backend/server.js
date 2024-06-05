const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email service
    auth: {
        user: 'alanajoshua535@gmail.com', // Your email
        pass: 'Joshua_2002', // Your email password
    },
});

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'support@appeta.com', // Your support email
        subject: `Contact form submission from ${name}`,
        text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
