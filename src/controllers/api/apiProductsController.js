const db = require('../../database/models');

module.exports = {

index: async function(req, res){

    const products = await db.producto.findAll({where: {borrado: 0}})
        if (products.length > 0){            
            let resultado = {
                metadata: {
                    status: 200,
                },
                data: {products, quantity: products.length},

            }
                res.json(resultado)
        } 
    },

vender: async function(req, res){

    const products = await db.producto.findAll({where: {borrado: true}})
        if (products.length > 0){
            let resultado = {
                metadata: {
                    status: 200,
                    quantity: products.length
                },
                data: {products}
            }
                res.json(resultado)
        } 
    }

// vender: async function(req, res){

//     const detailProduct = await db.producto.findByPk(req.params.id, { include: [{association: "categorias"}]})
//         if(detailProduct){
//             let resultado = { 
//                 metadata:{
//                     status:200,
//                 },
//                 data:{ detailProduct }
//             }
//                 res.json(resultado)
//         };        
//     },

// vender: async function(req, res){

//     const products = await db.producto.findAll({where: {borrado: true}})
//         if (products.length > 0){
//             let resultado = {
//                 metadata: {
//                     status: 200,
//                     quantity: products.length
//                 },
//                 data: {products}
//             }
//                 res.json(resultado)
//         } 
//     },


}



       




