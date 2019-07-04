const mongoose = require('mongoose');

const {Schema} = mongoose;

const Kookje = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Kookje',Kookje,'Kookje');