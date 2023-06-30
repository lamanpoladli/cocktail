const mongoose = require('mongoose');

// Profil

const ProfilModel = mongoose.model("Profil", new mongoose.Schema({
    imageURL: String,
}));

module.exports = ProfilModel