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

router.get('/register', function(req, res){
  res.render('register');
});

  // GET route for getting all of the todos
  router.get('/user/create', function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.user.findAll({
      where:{
      id: 1
    }
    }).then(function(user) {
      // We have access to the todos as an argument inside of the callback function
      console.log(user + "test1");
      res.json(user);
    });
  });

router.post('/user/create', function (req, res) {
  db.user.create({
    user_name: req.body.user_name,
    user_password: req.body.user_password
  }).then(function(data){
    console.log("account creation worked!");
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
    
    console.log("login worked");
    res.redirect('/index');
  });
});

module.exports = router;
