const express = require('express');
const router = express.Router();
const apiProductsController = require('../../controllers/api/apiProductsController');


//Todos los Productos
router.get('/', apiProductsController.index);

//Vendidos
router.get('/vendidos', apiProductsController.vender);



module.exports = router