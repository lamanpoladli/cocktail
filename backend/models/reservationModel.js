const mongoose = require('mongoose');

const reservationModel = mongoose.model("reservation", new mongoose.Schema({
    personCount: Number,
    date: String,
    clock: String,
    isAccepted: Boolean,
    email: String
}));

module.exports = reservationModel