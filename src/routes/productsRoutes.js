const productsController = require('../controllers/productsController');
const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator")

const authMiddleware = require('../../middlewares/authMiddleware')
const upload = require('../../middlewares/multerMiddleware');
const valido = require('../../middlewares/validateProductsMiddleware')

router.get("/", productsController.catalogo)

router.get("/detail/:id",  upload.single("imagen"), productsController.productDetail)

router.get("/create", authMiddleware, productsController.create)
router.post('/create', upload.single("imagen"), valido, productsController.store); 

router.get('/edit/:id', authMiddleware, productsController.edit); 
router.put('/edit/:id', upload.single("imagen"), productsController.update); 

router.delete("/delete/:id", productsController.destroy);


module.exports = router;