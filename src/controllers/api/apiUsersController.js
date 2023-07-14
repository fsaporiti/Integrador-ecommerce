const db = require('../../database/models');

module.exports = {


total: async function(req, res){

    const users = await db.usuario.findAll({where: {rol: "comun"}})
        if (users.length > 0){
            let resultado = {
                metadata: {
                    status: 200,
                    quantity: users.length
                },
                data: {users}
            }
                res.json(resultado)
        } 
    }

}