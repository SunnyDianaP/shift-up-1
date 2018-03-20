
var express = require('express')
var app = express();

app.get('/' ,function(req, res){
	res.send('homepage.html');
});

app.get('/Registration' ,function(req, res){
	res.send('index.html');
});