const express = require('express')
const user_router = express.Router()

const usersController = require('../controllers/userController')

user_router.get('/users',usersController.getAllUsers)

user_router.post('/register',usersController.postRegister)

user_router.post('/login',usersController.postLogin)

user_router.post('/admin/login',usersController.AdminPostLogin)

module.exports = user_router