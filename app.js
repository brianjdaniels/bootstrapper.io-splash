var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));

var html = fs.readFileSync('index.html').toString();

app.get('/', function(req, res){
    res.send(html);
});

var port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log('listening on port %d', port);
});