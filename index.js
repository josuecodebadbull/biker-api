'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/biker_app', (err, res) => {
    if (err) {
        throwerr;
    } else {
        console.log('base de datos OK');
        app.listen(port, function () {
            console.log('Servidor del api rest');
        });
    }
})