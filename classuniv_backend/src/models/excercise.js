const mongoose = require('mongoose');

const {Schema} = mongoose;

const Excercise = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Excercise',Excercise,'Excercise');