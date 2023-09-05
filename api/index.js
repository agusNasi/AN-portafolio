const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
  })
);
app.use(express.json());

const gmailTransport = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.get('/api/test', (req, res) => {
  res.send('hola');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, summary, message } = req.body;
  try {
    const mailInfo = await gmailTransport.sendMail({
      from: '<agustinnasi49@gmail.com',
      to: 'agustinnasi11@gmail.com',
      subject: `${summary}`,
      html: `
              <div>
                  <h3>Nombre:</h3>
                  <p>${name}</p>
                  <hr />
                  <h3>Email:</h3>
                  <p>${email}</p>
                  <hr />
                  <h3>Asunto:</h3>
                  <p>${summary}</p>
                  <hr />
                  <h3>Mensaje:</h3>
                  <p>${message}</p>
              </div>`,
      attachments: [],
    });
    res.json(mailInfo);
  } catch (error) {
    res
      .status(400)
      .send({ message: 'Error al enviar el mail. Intente nuevamente luego' });
  }
});

app.listen(4000);
