const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myconnection = require('express-myconnection');

const app = express();

// TODO: IMPORTAR RUTAS DESDE /ROUTES
const coustomerRoutes = require('./routes/customers')

// TODO: DEFINICION DE CONFIGURACION DE RUTAS
app.set('port',process.env.PORT || 3000);l
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// ? MIDDLEWARES
app.use(morgan('dev'))
app.use(myconnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port:  3306,
    database: 'crudnodejsmysql'
}, 'single'))
app.use(express.urlencoded({extended: false}))

//ROUTES
app.use('/', coustomerRoutes)

//STATIC FILES
app.use(express.static(path.join(__dirname,'public')))

//START SERVER
app.listen(app.get('port'),()=>{
    console.log(`Conecctado en el puerto ${app.get('port')}`)
})