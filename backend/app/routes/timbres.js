const express = require('express');

let Timbre = require(__dirname + '/../models/timbre.js');

let router = express.Router();

// Endpoint llistar timbres
router.get('/', (req, res) => {
    console.log("Llistat timbres...");

    Timbre.find().then(resultado => {
        res.status(200)
           .send({ ok: true, resultado: resultado });
    }).catch (error => {
        console.log(error);
        res.status(500)
           .send({ ok: false, error: "Error llistant timbres" });
    }); 
});

// Endpoint par inserir
router.post('/', (req, res) => {
    console.log("Inserint timbre...");
    
    let nouTimbre = new Timbre({
        descripcio: req.body.descripcio,
        hora: req.body.hora,
        minut: req.body.minut,
        diaRepeticio: req.body.diaRepeticio
    });

    nouTimbre.save().then(resultado => {
        res.status(200)
           .send({ok: true, resultado: resultado});
    }).catch(error => {
        console.log(error);
        res.status(400)
           .send({ok: false, 
                  error: "Error afegint timbre"});
    });
});


module.exports = router;