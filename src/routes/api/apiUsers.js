const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/api/apiUsersController');


//Usuarios
router.get('/total', apiUsersController.total);



module.exports = router