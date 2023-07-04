const express = require('express');
const product_router = express.Router()
const productController = require('../controllers/productController')


//get Category All Products
product_router.get('/category/:id',productController.getCategoryAllProducts)

// //get All Products
// product_router.get('/', productController.getAllProducts)

// //get product by id
// product_router.get('/:id', productController.getByID)

product_router.get('/', productController.getAllProducts)

//get Product by ID
product_router.get('/:id', productController.getByID)

//post Product
product_router.post('/', productController.post)

//delete Product
product_router.delete('/:id',productController.delete)

//edit Product
product_router.put('/:id',productController.edit)

module.exports = product_router