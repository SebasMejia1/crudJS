const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myconnection = require('express-myconnection');

const app = express();

// TODO: IMPORTAR RUTAS DESDE /ROUTES
const coustomerRoutes = require('./routes/customers')

// TODO: DEFINICION DE CONFIGURACION DE RUTAS
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');