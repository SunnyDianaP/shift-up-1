const express = require ('express');
const app = express();
const path = require ('path');
const bodyParser = require('body-parser');
const index = require ('./router/index');
const port = ('port', process.env.PORT||3000);

//database connection  
var mongoDB = require ('mongoDB');
mongoDB.connect ('mongodb://<dbuser>:<dbpassword>@ds121599.mlab.com:21599/shiftup');
//set view engine
app.set ('view engine','ejs');
// set views
app.set ('views', __dirname + '/views');
//json reader
app.use (bodyParser.json());
//  middleware 
app.use(bodyParser.urlencoded({ extended: true }));
// serve static files
app.use (express.static ('public'));
// homepage 
app.use ('/',index);
//listen to port
app.listen (3000, function() {
  console.log ("Server is running");
});
//function that runs server: test server at http://localhost:3000
node.server.js

