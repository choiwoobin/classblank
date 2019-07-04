const mongoose = require('mongoose');

const {Schema} = mongoose;

const Design = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Design',Design,'Design');