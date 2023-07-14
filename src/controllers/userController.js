const path = require('path');
const fs = require('fs');

const usersFilePath = path.join(__dirname, '../Json/userBase.json');
const productoFilePath = path.join(__dirname, '../Json/catalogoBase.json');
const productos = JSON.parse(fs.readFileSync(productoFilePath, 'utf-8'));
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../../modelos/User')
const db = require('../database/models');

const userController = {
    login: (req,res) => {
        res.render('login');
    },

    loginProcess: (req, res) => {
        db.usuario.findOne({
            where: {
                email: req.body.email,
            },
        })
        .then(function(userToLogin){
            if (userToLogin != null){
                let isOkThePassword = bcryptjs.compareSync(req.body.clave, userToLogin.clave);
            if (isOkThePassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
            if (req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 }) //equivale a 2 minutos
            }
            return res.redirect("/")
            } 
            return res.render('login', {
                errors: {
                    clave: {
                        msg: 'Las credenciales son incorrectas'
                    },
                    email: {
                        msg: 'Las credenciales son incorrectas'
                    }
                    } 
                }) 
        } 
        return res.render('login', {
            errors: {
                email: {
                    msg: 'Por favor ingresar un email valido'
                }
                } 
            })
    })
    },

    register: (req,res) => {
        res.render('register');
    },

    store: (req,res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        db.usuario.findOne({
            where: {
                email: req.body.email,
            }
        })
        .then(function(userInDB){
            if (userInDB != null) {
                return res.render('register', {
                    errors: {
                        email: {
                            msg: 'Este email ya esta registrado'
                        }
                    },
                    oldData: req.body
                });
            } else {
                db.usuario.create({
                    ...req.body,
                    rol: "comun",
                    clave: bcryptjs.hashSync(req.body.clave, 10)
                })
                return res.redirect('/users/login');
            }
        })
    },

    edit: (req,res) => {
        db.usuario.findOne({
            where: { email: req.session.userLogged.email }
        })
            .then(function(objUser){
                res.render('register-edit', {usuario: objUser});
            })
    },
    update: (req,res) => {
        if (req.body.clave ){
        db.usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            clave: bcryptjs.hashSync(req.body.clave, 10),
        },
        {where: { id: req.session.userLogged.id } })
            .then(function(resultado){
                if (resultado){
                    res.redirect("/");
                }
            })
        } else {
            db.usuario.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
            },
            {where: { id: req.session.userLogged.id } })
                .then(function(resultado){
                    if (resultado){
                        res.redirect("/");
                    }
                })
        }
    },

    cart: (req,res) => {
       
                res.render("cart")
          
      
    },

    delete: (req,res) => {
        let id = req.params.id
        db.usuario.destroy({
            where: {
                id: id,
            },
        }).then(function (resultado) {
            if (resultado) {
                res.redirect("/products");
            }
        });
    },

    crearusuario: async (req, res) => {
        let roles = await db.usuario.findAll()
        res.render("crearUsuario", {roles: roles})
	},

    procesoUsuario: async (req, res) => {
        db.usuario.create({
            ...req.body,
            rol: "administrador",
            clave: bcryptjs.hashSync(req.body.clave, 10)
        })
        return res.redirect('/users/login');
	},

    editar: (req,res) => {
            db.usuario.findAll()
                .then(function(usuariosTotales){
                    res.render("listaUsuarios", {usuarios: usuariosTotales})
                })
    },

    particular: (req,res) => {
        db.usuario.findByPk(req.params.id)
            .then(function(usuario){
               res.render("perfil", {usuario: usuario})
          })
    },

    detalleUsuario: (req,res) => {
        db.usuario.findByPk(req.params.id)
            .then(function(usuario){
                res.render("usuario-editado", {usuario: usuario})
            })
    },
    usuarioActualizado: (req,res) => {
        if (req.body.clave ){
            db.usuario.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                clave: bcryptjs.hashSync(req.body.clave, 10),
            },
            {where: { id: req.params.id } })
                .then(function(resultado){
                    if (resultado){
                        res.redirect("/");
                    }
                })
            } else {
                db.usuario.update({
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    email: req.body.email,
                },
                {where: { id: req.params.id } })
                    .then(function(resultado){
                        if (resultado){
                            res.redirect("/");
                        }
                    })
            }
    },


    // detalle: (req,res) => {
    //     res.render('products');
    // },

    profile: (req, res) => {
		return res.render('userProfile', {
			user: req.session.userLogged
		});
	},

    cerrarSesion: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

}

module.exports = userController;


            // if (userToLogin.rol == "comun") {
            //     res.render ("homeUsuario")
            // }
            // if (userToLogin.rol == "administrador") {
            //     res.render ("homeAdmin")
            // }
            // if (userToLogin.rol == "superadministrador") {
            //     res.render ("homeSuperAdmin")
            // }