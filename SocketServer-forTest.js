var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

var port = process.env.PORT || 3000;


// Initialize appication with route / (that means root of the application)
app.get('/', function(req, res){
  var express=require('express');
  app.use(express.static(path.join(__dirname)));
  res.sendFile(path.join(__dirname, './', 'index.html'));
});
// Register events on socket connection
// Register Chat event 
io.on('connection', function(socket){ 
  socket.on('chatMessage', function(from, msg){
    io.emit('chatMessage', from, msg);
  });
// Register Notify event 
  socket.on('notifyUser', function(user){
    io.emit('notifyUser', user);
  });
});
// Listen application request on port 3000
http.listen(port, function(){
  console.log('listening on *:3000');
});