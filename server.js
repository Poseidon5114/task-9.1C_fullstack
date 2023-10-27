const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');

const app = express();

// Configuring Mailgun API and Domain
const mailgunApiKey = 'MailgunApi';
const mailgunDomain = 'Domain';
const mg = mailgun({ apiKey: mailgunApiKey, domain: mailgunDomain });

// BodyParser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Provide html to server
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handling of form
app.post('/subscribe', (req, res) => {
    const { email } = req.body;
  
    const data = {
      from: '',
      to: email,
      subject: 'Welcome Email',
      text: 'Thank you for subscribing to DEV Deakin newsletter!',
    };
  
    mg.messages().send(data, (error, body) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email.' });
      } else {
        console.log('Email sent:', body);
        res.json({ message: 'Welcome email sent successfully.' });
      }
    });
  });

// for start of server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});