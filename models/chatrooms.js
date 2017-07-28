//var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var chatrooms = sequelize.define("chatrooms", {
	    chatroom_name: {
	      type: DataTypes.STRING
	    },
	}
);
  return chatrooms;
};
