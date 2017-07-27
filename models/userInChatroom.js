module.exports = function(sequelize, DataTypes) {
  var userInChatroom = sequelize.define("userInChatroom", {
	    active: {
	      type: DataTypes.BOOLEAN
	    },
	}
);


 userInChatroom.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
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
