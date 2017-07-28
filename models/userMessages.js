module.exports = function(sequelize, DataTypes) {
  var userMessages = sequelize.define("userMessages", {
	    Message: {
	      type: DataTypes.STRING
	    },
	}
);


 userMessages.associate = function(models) {
    
     userMessages.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });	
    
	};	  
  return userMessages;
};
