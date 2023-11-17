const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const axios = require('axios');

const url = 'https://comfortable-duck-shift.cyclic.app/comment';

app.use(bodyParser.json());

// Route to receive notifications from the webhook
app.post('/webhook-endpoint', (req, res) => {
  const webhookData = req.body;

  console.log(webhookData);

  axios.post(url, webhookData) // Pass the webhookData in the request
    .then((axiosRes) => {
      // Handle the response data
      console.log('Response:', axiosRes.data);
      res.status(200).send(axiosRes.data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error.message);
      res.status(500).send('Internal Server Error');
    });

  // Additional actions as needed
});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servicio web en ejecución en el puerto ${puerto}`);
});
