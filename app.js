var app = require('express')();
var http = require('http').Server(app);
var express = require('express')

app.use(express.static(__dirname ));
app.get('/', function(req, res){
	res.sendfile('index.html');
});

http.listen(2000, function(){
  console.log('listening on *:8099');
});




