const express = require('express');
const mongoose = require('mongoose');

const dbconfig = require(__dirname + '/config/db.config');

// Enrutadores
const aules = require(__dirname + '/routes/aules');
const timbres = require(__dirname + '/routes/timbres');

require("dotenv").config();
// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;

// Express Framework
let app = express();

// Middleware: it parses requests with JSON payloads 
app.use(express.json());
// Middleware: it parses incoming requests with urlencoded payloads
app.use(express.urlencoded());

// Connexió a la BD
// Observacions: Nom de host ** Nom service en Dockercompose **
mongoose
  .connect(
    dbconfig.url,
    //'mongodb://mongodb:27017/testdb', // Proves sense autenticació i usuaris
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connectat a MongoDB: ' + dbconfig.url))
  .catch(err => console.log(err));


// Enrutadors
app.use('/api/aules', aules);
app.use('/api/timbres', timbres);

// Endpoint per a proves
app.get('/test', (req, res) => {
  console.log("Testing!");
  res.send('Testing...');
});


// A esperar peticions
app.listen(PORT, () => {
  console.log(`Servidor SilentBell escoltant en el port ${PORT}.`);
});