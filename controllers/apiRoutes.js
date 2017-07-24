var express =require("express");
var router = express.Router();

var db = require("../models");


app.get("/api/media", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    
   db.media.findAll(
    ).then(function(dbchannels) {
      res.json(dbchannels);
    });
  });
};

   app.get("/api/media/:id", function(req, res) {
    db.MediaType.findOne({
      where: {
        id: req.params.id
      },
      include: [MediaCategories]
    }).then(function(tmedia) {
      res.json(tmedia);
    });
  });


  app.get("/api/categories", function(req, res) {
    db.MediaCategories.findAll().then(function(dbcategory) {
      res.json(dbcategory);
    });
  });
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
  
   app.get("/api/categories/:id", function(req, res) {
    db.MediaCategories.findOne({
      where: {
        id: req.params.id
      },
      include: [MediaSchedule]
    }).then(function(dbcategory) {
      res.json(dbcategory);
    });
  });

module.exports = router;
