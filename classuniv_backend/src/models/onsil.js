const mongoose = require('mongoose');

const {Schema} = mongoose;

const Onsil = new Schema({
    yoil:String,
    ho: String,
    time: [String]
})

module.exports = mongoose.model('Onsil',Onsil,'Onsil');