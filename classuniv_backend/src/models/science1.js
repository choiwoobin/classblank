const mongoose = require('mongoose');

const {Schema} = mongoose;

const Science1 = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Science1',Science1,'Science1');