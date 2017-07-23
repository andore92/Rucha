// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
// app.use(bodyParser.json());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false}));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
// app.use(express.static("public"));

// Routes
// =============================================================

var routes = require("./controllers/mediaController.js");
  app.use("/",routes);

// db.sequelize.sync().then(function() {
// app.listen (port);
// 	console.log("server started at : " + port)
// });;


// var htmlroutes = require("./routes/htmlRoutes.js");
// app.use(app.htmlroutes);
// htmlroutes.initialize(app);
// var apiroutes = require("./routes/apiroutes.js");

// app.use(app.apiroutes);
// apiroutes.js.initialize(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("app listening on PORT " + PORT);
  });
});
