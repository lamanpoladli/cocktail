const express = require('express');
const category_router = express.Router()
const categoryController = require('../controllers/categoryController');
const categoryPostValidation = require('../middlewares/categoryMiddleware')

//get All Categories
category_router.get('/',categoryController.getAll)

//get Category by ID
category_router.get('/:id',categoryController.getByID)

//post Category
category_router.post('/',categoryPostValidation,categoryController.post)

//delete Category
category_router.delete('/:id',categoryController.delete)

//edit Category
category_router.put('/:id',categoryController.edit)


module.exports = category_router
