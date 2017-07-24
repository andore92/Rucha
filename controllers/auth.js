var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app) {
 
    app.get('/user/create', authController.signup);
 
}