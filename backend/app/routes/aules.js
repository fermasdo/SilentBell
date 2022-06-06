const express = require('express');

let Aula = require(__dirname + '/../models/aula.js');
let router = express.Router();

// Endpoint llistar aules
router.get('/', (req, res) => {
    console.log("llistat...");

    Aula.find().then(resultado => {
        res.status(200)
           .send({ ok: true, resultado: resultado });
    }).catch (error => {
        console.log(error);
        res.status(500)
           .send({ ok: false, error: "Error listando aulas" });
    }); 
});

// Endpoint para insertar aula
router.post('/', (req, res) => {
    console.log("post...");
    
    let nuevaAula = new Aula({
        nom: req.body.nom,
        numero: req.body.numero,
    });

    nuevaAula.save().then(resultado => {
        res.status(200)
           .send({ok: true, resultado: resultado});
    }).catch(error => {
        console.log(error);
        res.status(400)
           .send({ok: false, 
                  error: "Error añadiendo aula"});
    });
});


module.exports = router;