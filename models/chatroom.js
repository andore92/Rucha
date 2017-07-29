//var bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var chatroom = sequelize.define("chatroom", {
	    chatroom_name: {
	      type: DataTypes.STRING
	    },
	}
);
  return chatroom;
};
