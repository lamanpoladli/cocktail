const express = require('express');
const Profil_router = express.Router()
const ProfilController = require('../controllers/profilController');

//get All 
Profil_router.get('/', ProfilController.getAll)

//post 
Profil_router.post('/', ProfilController.post)

//delete 
Profil_router.delete('/:id', ProfilController.delete)

//edit 
Profil_router.put('/:id', ProfilController.edit)


module.exports = Profil_router