'use stict'

var express = require('express');
var UserController = require('../controllers/user'); 

var api =  express.Router();

api.get('/prueba', UserController.prueba);
api.post('/saveUser', UserController.saveUser);


module.exports = api;