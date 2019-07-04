const mongoose = require('mongoose');

const {Schema} = mongoose;

const Esra = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Esra',Esra,'Esra');