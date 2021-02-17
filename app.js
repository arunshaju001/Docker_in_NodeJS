const express = require('express');
const axios = require('axios');

// Constants
const PORT = 4200;
const HOST = '0.0.0.0';

const app = express();

app.get('/' , (req, res) => {
   return res.status(200).send('Welcome to Github User Finder : Goto http://localhost:8080/users/"name"');
  })
    

app.get('/users/:name', (req, res) => {
  const searchUrl = `https://api.github.com/users/${req.params.name}`;
  axios.get(searchUrl).then(response => {
    const responseJSON = response.data;
    return res.status(200).json({ source: 'Github Users', ...responseJSON, });
  })
  .catch(err => {
    return res.json(err);
  });
  
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);