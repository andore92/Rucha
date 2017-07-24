var express =require("express");
 var router = express.Router();


var db = require("../models");


router.get("/media", function(req, res){

	db.MediaType.findAll({
	}).then(function(allMediaType) {
		var allMediaType = {
				media_data : allMediaType
			};
			
			console.log("Media Type recevied are :::: " +allMediaType.media_data )
			return res.render("index", allMediaType);
	   });
});

router.get("/media/categories", function(req,res){
	
		
	db.MediaCategories.findAll({
	}).then(function(allcategoryType) {
		var categories = {
				category_data : allcategoryType
			};
			
			return res.render("index", allcategoryType);
	   });
});

router.get("/content/categories", function(req,res){
	
		
	db.MediaSchedule.findAll({
	}).then(function(allcontentType) {
		var content = {
				content_data : allcontentType
			};
			
			return res.render("index", allcontentType);
	   });
});


router.get('/', function (req, res) {
  res.redirect('/login');
});

router.get('/login', function (req, res) {
  res.render('login');
});

router.get('/register', function(req, res){
  res.render('register');
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
    console.log("user id: " + data.id);
    console.log("login worked");
    res.redirect('/');
  });
});

module.exports = router;
