'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app  = express();

//MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

//CARGAR RUTAS
var user_routes = require('./routes/user')


//HEADERS


//rutas
app.use('/api', user_routes)

module.exports = app;