const path = require("path");
const fs = require("fs");

/*const productsFilePath = path.join(__dirname, '../database/productsBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));*/
// const productoFilePath = path.join(__dirname, '../Json/catalogoBase.json');
// const productos = JSON.parse(fs.readFileSync(productoFilePath, 'utf-8'));

const db = require('../database/models');

const mainController = {
    index: function (req,res){
        // const productos = JSON.parse(fs.readFileSync(productoFilePath, 'utf-8'));
        // res.render("index", {ps: productos})
        let productsdb = [];
        db.producto.findAll({ include: [{association: "categorias"}, {association: "color"}, {association: "material"}], where: {Color_id: 2 }})
            .then(function(resulProducto){
                for (producto of resulProducto){
                    let objeto = {
                        id: producto.id,
                        nombre: producto.nombre,
                        fecha: producto.fecha_creacion,
                        imagen: producto.imagen,
                    }
                    
                    productsdb.push(objeto);
                }
                res.render("index", {ps: productsdb});
            })
    }
}

module.exports = mainController;