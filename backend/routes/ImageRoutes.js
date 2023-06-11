const express = require('express');
const image_router = express.Router()
const imageController = require('../controllers/imageController');


//get All Images
image_router.get('/',imageController.getAllImages)

//get Image by ID
image_router.get('/:id',imageController.getImageByID)

//post Image
image_router.post('/',imageController.post)

//edit Image
image_router.put('/:id',imageController.edit)


module.exports = image_router