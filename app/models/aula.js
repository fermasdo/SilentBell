const mongoose = require('mongoose');

let aulaSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    numerod: {
        type: Number,
        min: 0
} });

let Aula = mongoose.model('aula', aulaSchema);
module.exports = Aula;