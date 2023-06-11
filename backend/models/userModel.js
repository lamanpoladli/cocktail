const mongoose = require('mongoose');

const userModel = mongoose.model("Users", new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean
}));

module.exports = userModel

