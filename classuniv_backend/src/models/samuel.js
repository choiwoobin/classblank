const mongoose = require('mongoose');

const {Schema} = mongoose;

const Samuel = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Samuel',Samuel,'Samuel');