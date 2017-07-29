var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
	    user_name: {
	      type: DataTypes.STRING
	    },
	    user_password: {
	      type: DataTypes.STRING
	    }
	},
	{
  	hooks: {
    beforeCreate: function (input) {
    	console.log('input', input)
      input.user_password = bcrypt.hashSync(input.user_password, 10);
    }
  }

  });
  return user;
};
