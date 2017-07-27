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

function notifyTyping() { 
  var user = $('#user').val();
  socket.emit('notifyUser', user);
}

socket.on('chatMessage', function(from, msg){
  var me = $('#user').val();
  var color = (from == me) ? 'green' : '#009afd';
  var from = (from == me) ? 'Me' : from;
  $('#messages').append('<li><b style="color:' + color + '">' + from + '</b>: ' + msg + '</li>');
});

socket.on('notifyUser', function(user){
  var me = $('#user').val();
  if(user != me) {
    $('#notifyUser').text(user + ' is typing ...');
  }
  setTimeout(function(){ $('#notifyUser').text(''); }, 10000);;
});

var user1 = "";
// ------ =-----------------------
// this should be replace by SEQUALIZE 
//--------------------------------------
$(document).ready(function(){

getUser();
  // This function grabs user from the database and updates the view
  function getUser() {
    $.get('/user/create', function(data) {
      console.log("User", data);
        user1 = data[0].user_name;
    console.log(user1);
    });

  
  //var name = makeid();
  var name = "";
  name = user1;
  console.log(name);
  $('#user').val(name);
  socket.emit('chatMessage', 'System', '<b>' + name + '</b> has joined the discussion');
}
});
/*function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < 5; i++ ) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  console.log(text);
  return text;
}*/