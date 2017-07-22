	// /dependencies
var express = require ('express');
 var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
//create the express instance
var port = process.env.PORT || 3000;
var app = express();

//Serve static content for the app from the "public" directory in the app directory.
app.use(express.static("view"));
app.use(bodyParser.urlencoded({ extended: false}));

//Override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give the server access to them.
var routes = require("./controller/hyphenate_controller.js");
app.use('/',routes);
app.use("/hyphenate/create",routes);
 app.use("/hyphenate/user/password",routes);
 app.use("/hyphenate",routes);


app.listen (port);

console.log("server started at : " + port)



