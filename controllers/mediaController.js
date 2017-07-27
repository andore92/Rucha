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
  res.render('home');
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
