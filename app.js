const mainRoutes = require('./src/routes/mainRoutes');
const userRoutes = require('./src/routes/userRoutes');
const productsRoutes = require('./src/routes/productsRoutes');
const express = require ("express");
const path = require ("path");
const app = express ();
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
let cors = require("cors")

const publicPath = path.resolve (__dirname, "./public" );

app.use(cors())

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
const apiProductsRouter = require('./src/routes/api/apiProducts');
const apiUsersRouter = require('./src/routes/api/apiUsers');

app.use(session({
    secret: "shh, It's a secret",
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use("/", mainRoutes);
app.use("/users", userRoutes);
app.use("/products", productsRoutes);
app.use('/api/products', apiProductsRouter);
app.use('/api/users', apiUsersRouter);

//console.log(publicPath)

app.use (express.static (publicPath));

app.set('view engine', 'ejs');

app.listen(process.env.PORT || 3100, () => {
    console.log("***   Servidor corriendo de forma exitosa en el puerto 3100   ***")
})