const mongoose = require('mongoose');

const {Schema} = mongoose;

const Science3 = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Science3',Science3,'Science3');