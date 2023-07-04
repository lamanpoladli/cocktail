const express = require('express');
const Footer_router = express.Router()
const FooterController = require('../controllers/footerController');

//get All 
Footer_router.get('/', FooterController.getAll)

//post 
Footer_router.post('/', FooterController.post)

//get by id
Footer_router.get('/:id', FooterController.getByID)

//delete 
Footer_router.delete('/:id', FooterController.delete)

//edit 
Footer_router.put('/:id', FooterController.edit)


module.exports = Footer_router