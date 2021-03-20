'use strict'

const mongoose = require('mongoose');
const app = require('./app')

const port = process.env.PORT || 3001;
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/ecommerce', {useUnifiedTopology: true, useNewUrlParser : true ,useCreateIndex: true} ).then(()=>{
    console.log('La conexion a la DB fue realizada correctamente');
    app.listen(port, () =>{
        console.log("Servidor se encuentra funcionando")
    });
}).catch(err => console.log(err));