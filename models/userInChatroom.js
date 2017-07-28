module.exports = function(sequelize, DataTypes) {
  var userInChatroom = sequelize.define("userInChatroom", {
	    active: {
	      type: DataTypes.BOOLEAN
	    },
	}
);


 userInChatroom.associate = function(models) {
  
    userInChatroom.belongsTo(models.chatroom, {
      foreignKey: {
        allowNull: false
      }
    });	

     userInChatroom.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });	
    
	};	  
  return userInChatroom;
};
