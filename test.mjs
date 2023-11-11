import axios from "axios";

   
    const comentario = "hello"
    const issueKey = "gbh2-1";

    // Realiza acciones adicionales según tus necesidades

    // Make the Axios request
// Send a POST request


axios({
    method: 'post',
    url: 'https://botproto.onrender.com/comment',
    data: { 
      comentario: comentario,
      ticket: issueKey
    }
  });