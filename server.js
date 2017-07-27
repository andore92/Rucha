var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')



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

var router = require('./controllers/mediaController.js');
app.use('/', router);

// Added by Divya Jain for Sockets 
// Register events on socket connection
// Register Chat event 
io.on('connection', function(socket){ 
  socket.on('chatMessage', function(from, msg){
    io.emit('chatMessage', from, msg);
  });
// Messages for a specific chat room
  socket.on('chatroomMessage', function(chatroom, from, msg){
    io.emit('chatroomMessage', chatroom, from, msg);
  }); 

// Register Notify event 
  socket.on('notifyUser', function(user){
    io.emit('notifyUser', user);
  });
});



db.sequelize.sync({force: true}).then(function(){
	server.listen(PORT, function(){
	console.log("listenning on http://localhost:" + PORT);
});
});
