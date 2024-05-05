// const express = require('express');
// const sgMail = require('@sendgrid/mail');
// const app = express();

// app.use(express.json());

// // Thiết lập API Key của SendGrid


// // Endpoint để gửi email
// app.post('/api/send-email', async (req, res) => {
//     const { name, email, title, content } = req.body;

//     const msg = {
//         to: email,
//         from: '22211tt1006@mail.tdc.edu.vn', // Địa chỉ email người gửi
//         subject: title,
//         text: `Xin chào ${name},\n\n${content}`,
//     };

//     try {
//         await sgMail.send(msg);
//         console.log('Email sent successfully');
//         console.log(sgMail.send(msg));
//         res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ error: 'Error sending email' });
//     }
// });

// // Khởi động server
// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
