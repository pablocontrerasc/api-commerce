'use strict'

var User = require('../models/user');
var bcrypt = require ('bcrypt');
const { hash } = require('bcrypt');

function prueba (req, res){
    res.status(200).send({
        message: 'Prueba en el servidor node.js'
    })
}


function saveUser(req, res){
    var params = req.body;
    var user = new User();
    if( params.username && params.email && params.password){
        User.findOne({ email: params.email.toLowerCase(), username: params.username}).exec((err,userFind)=>{
            if(err) return res.status(500).send({message: 'Error en la peticion'});
            if(userFind){
                res.status(404).send({message: 'el usuario ya existe', existe: true});
            }else{
                user.create_at = new Date();
                user.username = params.username;
                user.email = params.email.toLowerCase();
                user.role = 'ROLE_USER';
                var salt = bcrypt.genSaltSync();
                var hash = bcrypt.hashSync(params.password, salt)
                user.password = hash;
                    user.save((err, userStored)=>{
                        if(err) return res.status(500).send({ message: 'Error al guardar el usuario'});
                        if(userStored){
                            
                            res.status(200).send( {user: userStored})
                        }else{
                            res.status(404).save ({message:'No se ha registrado el usuario'})
                        }                
                });
            }
        });
    
    }else{
        res.status(404).send({ message: 'Debe ingresar todos los campos requeridos' })
    }

}

module.exports = {
    prueba,
    saveUser
}