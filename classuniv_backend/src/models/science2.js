const mongoose = require('mongoose');

const {Schema} = mongoose;

const Science2 = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Science2',Science2,'Science2');