const express = require('express');
const about_router = express.Router()
const aboutController = require('../controllers/aboutController')


// All Products
about_router.get('/', aboutController.getAllAbouts)

//get Product by ID
about_router.get('/:id', aboutController.getByID)

//post Product
about_router.post('/', aboutController.post)

//delete Product
about_router.delete('/:id',aboutController.delete)

//edit Product
about_router.put('/:id',aboutController.edit)

module.exports = about_router