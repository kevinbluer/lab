var express = require('express');
var port = process.env.PORT || 3002;
var app = express();
 
app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
}).configure(function() {
    app.use('/sites', express.static(__dirname + '/sites'));
}).listen(port);