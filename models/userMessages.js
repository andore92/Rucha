module.exports = function(sequelize, DataTypes) {
  var userMessages = sequelize.define("userMessages", {
	    Message: {
	      type: DataTypes.STRING
	    },
	}
);


 userMessages.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint


     userMessages.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });	
    
	};	  
  return userMessages;
};
