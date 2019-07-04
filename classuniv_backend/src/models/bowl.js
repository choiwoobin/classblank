const mongoose = require('mongoose');

const {Schema} = mongoose;

const Bowl = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Bowl',Bowl,'Bowl');