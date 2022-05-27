const mongoose = require('mongoose');

let timbreSchema = new mongoose.Schema({
    descripcio: {
        type: String,
        required: true
    },
    moment: {
        type: String,
        required: true,
        trim: true
    } 
});

let Timbre = mongoose.model('timbre', timbreSchema);
module.exports = Timbre;