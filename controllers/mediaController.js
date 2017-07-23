var express =require("express");
 var router = express.Router();

//import model berger.js to usee its database functions
var db = require("../models");

//All the routes and logic setup
router.get("/",function(req,res) {
	res.redirect("/media");
});

router.get("/media", function(req, res){

	db.MediaType.findAll({
	}).then(function(allMediaType) {
		var allMediaType = {
				media_data : allMediaType
			};
			//return res.json(rburger
			console.log("Media Type recevied are :::: " +allMediaType.media_data )
			return res.render("index", allMediaType);
	   });
});

router.get("/media/categories", function(req,res){
	// return db.customer.create({
		
	db.MediaCategories.findAll({
	}).then(function(allcategoryType) {
		var categories = {
				category_data : allcategoryType
			};
			//return res.json(rburger
			return res.render("index", allcategoryType);
	   });
});

router.get("/content/categories", function(req,res){
	// return db.customer.create({
		
	db.MediaSchedule.findAll({
	}).then(function(allcontentType) {
		var content = {
				content_data : allcontentType
			};
			//return res.json(rburger
			return res.render("index", allcontentType);
	   });
});

  module.exports = router;
