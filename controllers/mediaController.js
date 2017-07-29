
var db = require("../models");


module.exports = function(router){

router.get('/', function (req, res) {
  res.redirect('/login');
});


router.get('/login', function (req, res) {
  res.render('login');
});

router.get('/register', function(req, res){
  res.render('register');
});

router.get('/home', function (req, res) {  

   console.log("CHAT CONTROLLER: " + req.session.get('user.name', 'goAWAY '))  
  db.chatroom.findAll({}).then(function(allChatrooms){
      var ChatroomsObj = {
        chatroom_data : allChatrooms,
        userName: req.session.get('user.name', 'goAWAY ')
      };
    
    console.log("get rooms  worked");
     return res.render('home', ChatroomsObj);

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
  user = req.body.user_name
      console.log("login received for  " + user);
  db.user.findOne({
    where: {
      user_name: req.body.user_name
      // user_password: req.body.user_password
    }
  }).then(function(data) {
      var userObj = {
        user : data
      };
    req.session.put('user.name', user);
    req.session.put('user.id', userObj.user.dataValues.id);
    console.log("MEDIA CONTROLLER: " + req.session.get('user.name', 'goAWAY '))
    console.log("MEDIA CONTROLLER id : " + userObj.user.dataValues.id)
    console.log("login worked" + userObj);
    
     return res.redirect('/chatroom');

     });
});
} // END of export function




