const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    height: Number,
    weight: Number,
    chestCircumference: Number,
    hipCircumference: Number,
    bodyType: String,
    recommendedSize: String,
});

module.exports = mongoose.model('User ', userSchema);
