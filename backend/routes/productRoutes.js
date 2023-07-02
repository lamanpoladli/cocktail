const express = require('express');
const product_router = express.Router()
const productController = require('../controllers/productController')


//get Category All Products
product_router.get('/:id',productController.getCategoryAllProducts)

//get All Products
product_router.get('/', productController.getAllProducts)

//post Product
product_router.post('/', productController.post)

//delete Product
product_router.delete('/:id',productController.delete)

//edit Product
product_router.put('/:id',productController.edit)

module.exports = product_router