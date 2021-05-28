import { createTransport } from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mail = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `A new message from ${name}`,
            html: `<p>Email: ${email}</p>
                    <p>Message:</p>
                    <p>${message}</p>`,
        };

        try {
            await transporter.sendMail(mail);
            res.status(200).send({
                message:
                    "Thank you for reaching out. I'll try my best to get back to you as soon as I can.🎉",
            });
            res.end();
        } catch (error) {
            res.status(500).send({
                message: 'Oops! Something went wrong.',
            });
        }
    } else {
        res.status(500).send({ message: 'Not a post request.' });
    }
};
