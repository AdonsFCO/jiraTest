const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require("axios")

app.use(bodyParser.json());

// Ruta para recibir notificaciones del webhook
app.post('/webhook-endpoint', (req, res) => {

  const webhookData = req.body; 
  const comentario = webhookData.comment.body;
  console.log(`Nuevo Comentario: ${comentario}`);
  // Realiza acciones adicionales según tus necesidades
axios({
  method: 'post',
  url: 'https://botproto.onrender.com/comment',
  data: {
    ticket: webhookData.issue.key,
    comment: webhookData.body
  }
});


  res.status(200).send('Notificación recibida');


});

const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servicio web en ejecución en el puerto ${puerto}`);
});
