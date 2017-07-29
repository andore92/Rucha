var socket = io(); 
function submitfunction(){
  var from = $('#loggedUser').val();
  var message = $('#msgbox').val();
  if(message != '') {
  socket.emit('chatMessage', from, message);
}
$('#msgbox').val('').focus();
  return false;
}

// Function to send message to specific chatroom 
function submittoChatroomfunction(){
  var from = $('#loggedUser').val();
  var chatroom = $('#chatroom').val();
  var message = $('#msgbox').val();
  if(message != ''  ) {
  socket.emit('chatroomMessage', chatroom, from, message);
}
$('#msgbox').val('').focus();
  return false;
}

function notifyTyping() { 
  var user = $('#loggedUser').val();
  socket.emit('notifyUser', user);
}

socket.on('chatMessage', function( from, msg){
  var me = $('#loggedUser').val();
  var color = (from == me) ? 'green' : '#009afd';
  var from = (from == me) ? 'Me' : from;
  $('#messages').append('<li><b style="color:' + color + '">' + from + '</b>: ' + msg + '</li>');
});

socket.on('chatroomMessage', function(chatroom, from, msg){
  var me = $('#loggedUser').val();
  var mychatroom = $('#chatroom').val();  
  var color = (from == me) ? 'green' : '#009afd';
  var from = (from == me) ? 'Me' : from;
    if (mychatroom == chatroom)  {
  $('#messages').append('<li><b style="color:' + color + '">' + from + '</b>: ' + msg + '</li>');
}
});



socket.on('notifyUser', function(user){
  var me = $('#loggedUser').val();
  if(user != me) {
    $('#notifyUser').text(user + ' is typing ...');
  }
  setTimeout(function(){ $('#notifyUser').text(''); }, 10000);;
});

// -----------------------------

//--------------------------------------
$(document).ready(function(){
    var name = $('#loggedUser').val();
   var chatroom = $('#chatroom').val();
  if (name != null){
      socket.emit('chatMessage', 'System', '<b>' + name + '</b> has joined the chatroom ' + chatroom);
      socket.emit('chatroomMessage', 'systemRoom', 'System', '<b>' + name + '</b> has joined the chatroom' +chatroom );
}
});

$(document).ready(function() {

    var socket = io();

    $(':checkbox').change(function() {
        var state = $(this).is(':checked') ? 1 : 0;
        var command = $(this).attr('id') + ";" + state;
        socket.emit('message', command);
        console.log(command);
    });
});