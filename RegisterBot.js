const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const webhookClient = new Discord.WebhookClient('WEBHOOK_ID', 'WEBHOOK_TOKEN');

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    const message = `Nový formulář byl odeslán:\nJméno: ${formData.name}\nEmail: ${formData.email}\nZpráva: ${formData.message}`;

    webhookClient.send(message);
    res.send('Formulář byl úspěšně odeslán!');
});

app.listen(3000, () => {
    console.log('HTTP server naslouchá na portu 3000.');
});

client.login('BOT_TOKEN');
