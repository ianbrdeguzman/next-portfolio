import { createTransport } from 'nodemailer';
import Cors from 'cors';
import type { NextApiRequest, NextApiResponse } from 'next';

const initMiddleware = (middleware: any) => {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST']
  })
);

const submit = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.GMAIL_APP_PASS
      }
    });

    const mail = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `A new message from ${name}`,
      html: `<p>Email: ${email}</p>
                    <p>Message:</p>
                    <p>${message}</p>`
    };

    try {
      await transporter.sendMail(mail);
      res.status(200).send({
        message:
          "Thank you for reaching out. I'll try my best to get back to you as soon as I can.🎉"
      });
      res.end();
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: 'Oops! Something went wrong.'
      });
    }
  } else {
    res.status(500).send({ message: 'Not a post request.' });
  }
};

export default submit;
