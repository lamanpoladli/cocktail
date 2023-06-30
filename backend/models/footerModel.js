const mongoose = require('mongoose');

// Footer

const FooterModel = mongoose.model("Footer", new mongoose.Schema({
    imageURL: String,
}));

module.exports = FooterModel