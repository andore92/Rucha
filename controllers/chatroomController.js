// 
var express =require("express");
// var chatrouter = express.Router();

var db = require("../models");


module.exports = function(chatrouter){
// router.get('/', function (req, res) {
//   res.redirect('/chatroom/view');
// });

// chatrouter.get('/chatroom', function (req, res) {
//   res.render('home');
// });

//chatrouter.get('/home', function (req, res) {
chatrouter.get('/index', function (req, res) {
  userName = req.session.get('user.name', 'goAWAY ');
  ChatroomName = req.session.get('chatroom.name', 'goAWAY ');
      console.log("going to  rooms  with User = "+ userName + " Chatroom name ="+ ChatroomName);
  var userinChatroom = {
    user: userName
    // croom: ChatroomName
  };
  // var userinChatroomObJ = {
  //   userinChatroom: userinChatroom
  // }; // res.render('index', userinChatroomObJ);
  console.log(userinChatroom);
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
  //var l_user_name = req.body.user_name;
  var lUserId = req.session.get('user.id', 'goAWAY ');
  var lChatroomId = req.body.chatroomID
      req.session.put('chatroom.name', req.body.chatroom_name);
    req.session.put('chatroom.id', req.body.chatroomID);
  db.userInChatroom.create({
    active : true,
    userId: lUserId,
    chatroomId: lChatroomId
  }).then(function(data){
    console.log("chat room join  chatroom join worked!");
    res.redirect('/index');
  });
});
}; // Module export function 
//module.exports = chatrouter;
