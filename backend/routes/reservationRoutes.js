const express = require('express');
const reservation_router = express.Router()
const reservationController = require('../controllers/reservationController');


//get All Images
reservation_router.get('/',reservationController.get)

//post Image
reservation_router.post('/',reservationController.post)



module.exports = reservation_router