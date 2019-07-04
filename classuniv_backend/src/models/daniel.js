const mongoose = require('mongoose');

const {Schema} = mongoose;

const Daniel = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Daniel',Daniel,'Daniel');