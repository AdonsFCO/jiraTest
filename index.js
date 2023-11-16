const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const axios = require('axios');

const url = 'http://ec2-18-205-17-196.compute-1.amazonaws.com:3000/comment';

// Making a GET request using Axios



app.use(bodyParser.json());

// Ruta para recibir notificaciones del webhook
app.post('/webhook-endpoint', (req, res) => {
  const webhookData = req.body;

  console.log(webhookData);

  axios.post(url)
  .then((res,req) => {
    // Handle the response data
    console.log('Response:', res.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error.message);
  });




  // Realiza acciones adicionales según tus necesidades

  res.status(200).send('Notificación recibida');
});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servicio web en ejecución en el puerto ${puerto}`);
});
