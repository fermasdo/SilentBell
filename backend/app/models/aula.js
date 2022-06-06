const mongoose = require('mongoose');

let aulaSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    numero: {
        type: Number,
        min: 0
} });


// Primer paràmetre colecció en singular 
let Aula = mongoose.model('aula', aulaSchema);

module.exports = Aula;