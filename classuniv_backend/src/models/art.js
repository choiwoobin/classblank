const mongoose = require('mongoose');

const {Schema} = mongoose;

const Art = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Art',Art,'Art');
