"use strict";

var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use('/', serveStatic(__dirname + '/public'));

//create node.js http server and listen on port
module.exports = app;