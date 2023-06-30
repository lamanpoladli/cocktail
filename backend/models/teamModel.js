const mongoose = require('mongoose');

// Team

const TeamModel = mongoose.model("Team", new mongoose.Schema({
    name: String,
    imageURL: String,
    title: String,
    description: String

}));

module.exports = TeamModel