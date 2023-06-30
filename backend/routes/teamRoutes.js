const express = require('express');
const Team_router = express.Router()
const TeamController = require('../controllers/teamController');

//get All 
Team_router.get('/', TeamController.getAll)

//post 
Team_router.post('/', TeamController.post)

//delete 
Team_router.delete('/:id', TeamController.delete)

//edit 
Team_router.put('/:id', TeamController.edit)


module.exports = Team_router