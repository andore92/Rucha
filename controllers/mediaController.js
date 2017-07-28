var express =require("express");
var router = express.Router();

var db = require("../models");


router.get('/', function (req, res) {
  res.redirect('/login');
});

router.get('/index', function (req, res) {
  res.render('index');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.get('/home', function (req, res) {
  db.chatrooms.findAll({}).then(function(data){
    var chatroomsObj = { 
      chatrooms: data 
    };
    console.log(chatroomsObj);
    res.render('home', chatroomsObj);
  });
});

router.get('/register', function(req, res){
  res.render('register');
});


router.post('/user/create', function (req, res) {
  db.user.create({
    user_name: req.body.user_name,
    user_password: req.body.user_password
  }).then(function(data){
    res.redirect('/');
  });
});

router.post('/chatroom/create', function (req, res) {
  db.chatrooms.create({
    chatroom_name: req.body.chatroom_name

  }).then(function(data){
    console.log("chatroom  creation worked!");
    res.redirect('/home');
  });
});


router.post('/user/login', function (req, res) {
  db.user.findOne({
    where: {
      user_name: req.body.user_name,
      user_password: req.body.user_password
    }
  }).then(function(data){
    res.redirect('/home');

  });
});

module.exports = router;
