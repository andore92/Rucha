var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var NodeSession = require('node-session');
// var chatrouter = express.Router();



// Initialization session to trace userName/ID and chatroom Name/ID 
var NodeSession = require('node-session');
 
// init 
var nodeSession  = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});

function session(req, res, next){
    nodeSession.startSession(req, res, next);
}


 

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var PORT = process.env.PORT || 3000;

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(session);

require('./controllers/mediaController.js')(app);

require('./controllers/chatroomController.js')(app);

// Added by Divya Jain for Sockets 
// Register events on socket connection
// Register Chat event 
io.on('connection', function(socket){ 
  socket.on('chatMessage', function(from, msg){
    io.emit('chatMessage', from, msg);
  });
//
  socket.on('chatroomMessage', function(chatroom,from, msg){
    io.emit('chatroomMessage', chatroom, from, msg);
  });  
// Register Notify event 
  socket.on('notifyUser', function(user){
    io.emit('notifyUser', user);
  });
});



db.sequelize.sync({force: false}).then(function(){
	server.listen(PORT, function(){
	console.log("listenning on http://localhost:" + PORT);
	});
});
