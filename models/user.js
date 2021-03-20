'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userShema = Schema ({

    create_at: {
        type: Date,
    },
    email: String,
    username: String,
    password: String,
    
    role: String

});

module.exports = mongoose.model('user', userShema)