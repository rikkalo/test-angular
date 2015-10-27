var app = require('./app.js');
var http = require('http');

console.log('listening...');
http.createServer(app).listen(process.env.PORT || 3000);
