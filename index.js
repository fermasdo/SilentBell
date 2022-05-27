const express = require('express');

require("dotenv").config();

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;

let app = express();




app.get('/test', (req, res) => {
  console.log("Testing!");
  res.send('Testing...123');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});