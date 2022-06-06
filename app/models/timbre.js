const mongoose = require('mongoose');

const DIES = ["DILLUNS", "DIMARTS", "DIMECRES", "DIJOUS", "DIVENDRES", "DISSABTE", "DIUMENGE", "ENTRE_SETMANA", "CAP_DE_SETMANA", "DIARI"];

let timbreSchema = new mongoose.Schema({
    descripcio: {
        type: String,
        required: true
    },
    hora: {
        type: Number,
        required: true,//'Es requereix indicar hora del timbre',
        min: 0,
        max: 23
    },
    minut: {
        type: Number,
        required: true,
        min: 0,
        max: 59
    },
    diaRepeticio: {
        type: String,
        enum: DIES,
        default: "DIARI"
    }
});

let Timbre = mongoose.model('timbre', timbreSchema);
module.exports = Timbre;