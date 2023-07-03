const mongoose = require('mongoose');

// About

const AboutModel = mongoose.model("About", new mongoose.Schema({
    imageURL: String,
    name: String,
    title: String,
    description: String
}));

module.exports = AboutModel