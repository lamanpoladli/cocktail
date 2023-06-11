const mongoose = require('mongoose');

const imageModel = mongoose.model("Images", new mongoose.Schema({
    imageurl: String
}));

module.exports = imageModel