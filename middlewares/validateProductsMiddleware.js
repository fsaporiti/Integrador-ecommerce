const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body("nombre").notEmpty().withMessage("Debes escribir el nombre del producto"),
    body("precio").notEmpty().withMessage("Debes decidir un precio para el producto"),
    body("categoria").notEmpty().withMessage("Debes elegir una categoria"),
    body("material").notEmpty().withMessage("Debes elegir un material"),
    body("color").notEmpty().withMessage("Debes elegir un color"),
    body("fecha_creacion").notEmpty().withMessage("Debes elegir una fecha de creación"),
    body("descripcion").notEmpty().withMessage("Por favor escribir una breve descripcion del producto"),
    body("imagen").custom ((value, { req }) => {
        let file = req.file;
        let extensiones = [ ".jpg", ".png", ".jpeg", ".gif"]
        if (!file){
                throw new Error("Tienes que subir una imagen del producto")
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!extensiones.includes(fileExtension)) {
                throw new Error(`Las extensiones de archivo permitidas son ${extensiones.join(", ")}`)
            }
        }
        return true;
    })
]