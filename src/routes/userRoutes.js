const userController = require('../controllers/userController');

const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

//Middlewares
const validations = require('../../middlewares/validateRegisterMiddleware');
const guestMiddleWare = require('../../middlewares/guestMiddleware'); //para que si esta logeado no pueda ingresar a registrarse o logearse
const authMiddleware = require('../../middlewares/authMiddleware');//para que si no estas logeado, te mande a logearte.

//LOGUEARSE
router.get("/login", guestMiddleWare, userController.login);
router.post("/login", userController.loginProcess); //Progresar el login

//CREAR USUARIO
router.get('/login/register', authMiddleware,userController.register);
router.post('/login/register', validations, userController.store);

router.get('/login/register-edit', authMiddleware, userController.edit);
router.put('/login/register-edit', userController.update);
router.delete('/login/delete/', userController.delete);

//Perfil de usuario
router.get('/profile', authMiddleware, userController.profile);

//Sup.Admin - Crear usuario
router.get("/create", validations, authMiddleware, userController.crearusuario)
router.post("/create", validations, userController.procesoUsuario)

//Sup.Admin - EDITAR usuario
router.get("/editar", validations, authMiddleware, userController.editar)
router.get("/particular/:id", userController.particular)
router.get("/editar/:id", userController.detalleUsuario)
router.put("/editar/:id", userController.usuarioActualizado)
router.delete('/delete/:id', userController.delete);

//Cerrar sesion
router.get('/cerrarsesion', userController.cerrarSesion)

//DETALLE PRODUCTO USERS
// router.get("/", userController.detalle);

router.get('/carrito', userController.cart)

//router.get("/detail/:id",  upload.single("imagen"), productsController.productDetail)


module.exports = router;