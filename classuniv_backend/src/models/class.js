const mongoose = require('mongoose');

const {Schema} = mongoose;

const Class = new Schema({
    yoil:String,
    building: String,
    ho: String,
    time: [String],
})

module.exports = mongoose.model('class',Class);
