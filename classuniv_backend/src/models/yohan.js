const mongoose = require('mongoose');

const {Schema} = mongoose;

const Yohan = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Yohan',Yohan,'Yohan');