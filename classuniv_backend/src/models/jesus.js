const mongoose = require('mongoose');

const {Schema} = mongoose;

const Jesus = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Jesus',Jesus,'Jesus');