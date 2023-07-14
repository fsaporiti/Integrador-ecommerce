const db = require('../src/database/models');

async function userLoggedMiddleware(req, res, next) {

    res.locals.isLogged = false;

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    if (req.cookies.userEmail != undefined) {

        let userFromCookie = await db.usuario.findOne({
            where: {
                email: req.cookies.userEmail
            }
        })

        if (userFromCookie) {
            req.session.userLogged = userFromCookie;
        }
    }
    next();
}

module.exports = userLoggedMiddleware;


// const User = require('../modelos/User');

//     function userLoggedMiddleware (req, res, next) {
//         res.locals.isLogged = false;

//     let emailInCookie = req.cookies.userEmail;
//     let userFromCookie = User.findByField('email', emailInCookie);

//     if (userFromCookie) {
//         req.session.userLogged = userFromCookie;
//     }

//     if (req.session.userLogged) {
//         res.locals.isLogged = true;
//         res.locals.userLogged = req.session.userLogged;
//     }

//     next();
// }

// module.exports = userLoggedMiddleware;


//------------


// const db = require('../src/database/models');

// async function userLoggedMiddleware (req, res, next) {

//     res.locals.isLogged = false;
//     console.log(req.cookies);
//     if(req.cookies.userEmail != undefined){

//     let userFromCookie = await db.usuario.findOne({
//         where: {
//             email: req.cookies.userEmail
//         }
//     })

//     if (userFromCookie) {
//         req.session.userLogged = userFromCookie;
//     }

//     if(req.session.userLogged){
//         res.locals.isLogged = true;
//         res.locals.userLogged = req.session.userLogged;
//     }
// }
//     next();
// }

// module.exports = userLoggedMiddleware;

