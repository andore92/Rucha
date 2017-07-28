var socket = io(); 
function submitfunction(){
  var from = $('#user').val();
  var message = $('#msgbox').val();
  if(message != '') {
  socket.emit('chatMessage', from, message);
}
$('#msgbox').val('').focus();
  return false;
}

// Function to send message to specific chatroom 
function submittoChatroomfunction(){
  var from = $('#user').val();
  var chatroom = $('#chatroom').val();
  var message = $('#msgbox').val();
  if(message != ''  ) {
  socket.emit('chatroomMessage', chatroom, from, message);
}
$('#msgbox').val('').focus();
  return false;
}

function notifyTyping() { 
  var user = $('#user').val();
  socket.emit('notifyUser', user);
}

socket.on('chatMessage', function( from, msg){
  var me = $('#user').val();
  var color = (from == me) ? 'green' : '#009afd';
  var from = (from == me) ? 'Me' : from;
  $('#messages').append('<li><b style="color:' + color + '">' + from + '</b>: ' + msg + '</li>');
});

socket.on('chatroomMessage', function(chatroom, from, msg){
  var me = $('#user').val();
  var mychatroom = $('#chatroom').val();  
  var color = (from == me) ? 'green' : '#009afd';
  var from = (from == me) ? 'Me' : from;
    if (mychatroom == chatroom)  {
  $('#messages').append('<li><b style="color:' + color + '">' + from + '</b>: ' + msg + '</li>');
}
});



socket.on('notifyUser', function(user){
  var me = $('#user').val();
  if(user != me) {
    $('#notifyUser').text(user + ' is typing ...');
  }
  setTimeout(function(){ $('#notifyUser').text(''); }, 10000);;
});

// -----------------------------
// this should be replace by SEQUALIZE 
//--------------------------------------
$(document).ready(function(){
  var name = makeid();
  $('#user').val(name);
  socket.emit('chatMessage', 'System', '<b>' + name + '</b> has joined the discussion');
  socket.emit('chatroomMessage', 'systemRoom', 'System', '<b>' + name + '</b> has joined the discussion');
});
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < 5; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
