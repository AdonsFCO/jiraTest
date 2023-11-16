const axios = require('axios');

const url = 'https://graph.facebook.com/v17.0/129027050296307/messages';
const accessToken = 'EAAE9Bm7EhcwBO80zTWhXm3ZAXfgz653cdsL1R8HvOj7ginBLXIQWSIRIG00O44hSuZChAZArx4KMQgo5z6sNUP9uOi8MFjZASfq6NJ9UBjrMB21ngKZAMQDS7QqEE9XLu5RklO1zaVK28wQy7ldJ8hTyO1s4BhUskEaXY4jgbs41jzQUKMLOgQ6UclVAsWsa0IGBUBi4DMZCSbNfkO';

const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

const data = {
  messaging_product: 'whatsapp',
  to: '18099729103',
  type: 'template',
  template: {
    name: 'hello_world',
    language: {
      code: 'en_US',
    },
  },
};

// Making a POST request using Axios
axios.post(url, data, { headers })
  .then(response => {
    // Handle the response data
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error.message);
  });
