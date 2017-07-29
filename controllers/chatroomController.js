// 
var express =require("express");
var db = require("../models");


module.exports = function(chatrouter){




chatrouter.get('/index', function (req, res) {
  userName = req.session.get('user.name', 'goAWAY ');
  ChatroomName = req.session.get('chatroom.name', 'goAWAY ');
      console.log("going to  rooms  with User = "+ userName + " Chatrom name ="+ ChatroomName);
  var userinChatroom = {
    loginUser: userName,
    croom: ChatroomName
  };

  res.render('index', userinChatroom);
});

chatrouter.get('/chatroom', function (req, res) {  

   console.log("CHAT CONTROLLER: " + req.session.get('user.name', 'goAWAY '))  
  db.chatroom.findAll({
  }).then(function(allChatrooms){
      var ChatroomsObj = {
        chatroom_data : allChatrooms,
        userName: req.session.get('user.name', 'goAWAY ')
      };
    
    console.log("get rooms  worked");
     return res.render('home', ChatroomsObj);

  });
});



chatrouter.get('/chatroom/view', function (req, res) {
  db.chatroom.findAll({
  }).then(function(allChatrooms){
      var rChatrooms = {
        chatroom_data : allChatrooms
      };
    
    console.log("get rooms  worked");
     return res.render('chatroom', chatroom_data);

  });
});

chatrouter.post('/chatroom/create', function (req, res) {
  db.chatroom.create({
    chatroom_name: req.body.chatroom_name

  }).then(function(data){
    console.log("chatroom  creation worked!");
    res.redirect('/chatroom');
  });
});


chatrouter.put('/chatroom/join', function (req, res) {
 
  var lUserId = req.session.get('user.id', 'goAWAY ');
  var lChatroomId = req.body.chatroomID
      req.session.put('chatroom.name', req.body.chatroom_name);
    req.session.put('chatroom.id', req.body.chatroomID);
    console.log("JOIN CHAT ==" + req.body.chatroom_name)
  db.userInChatroom.create({
    active : true,
    userId: lUserId,
    chatroomId: lChatroomId
  }).then(function(data){
    console.log("chat room join  chatroom join worked!");
    res.redirect('/index');
  });
});
}; 
