var express =require("express");
var router = express.Router();

var db = require("../models");

router.get('/', function (req, res) {
  res.redirect('/chatroom/view');
});

router.get('/chatroom', function (req, res) {
  res.render('chatroom/view');
});


router.get('/chatroom/view', function (req, res) {
  db.chatroom.findAll({
  }).then(function(allChatrooms){
      var rChatrooms = {
        chatroom_data : allChatrooms
      };
    
    console.log("login worked");
     return res.render('chatroom', chatroom_data);

  });
});

router.post('/chatroom/create', function (req, res) {
  db.chatroom.create({
    chatroom_name: req.body.chatroom_name

  }).then(function(data){
    console.log("chatroom  creation worked!");
    res.redirect('/');
  });
});


router.post('/chatroom/join/:User/:Chatroom', function (req, res) {
  //var l_user_name = req.body.user_name;
  var lUserId = req.params.UserId
  var lChatroomId = req.params.chatroomId
  db.userInChatroom.create({
    active : true,
    userId: lUserId,
    chatroomId: lChatroomId
  }).then(function(data){
    console.log("chat room join  creation worked!");
    res.redirect('/');
  });
});
module.exports = router;
