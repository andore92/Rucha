module.exports = function(sequelize,DataTypes) {
	var	MediaCategories = sequelize.define("MediaCategories",{
				CategoryType: DataTypes.STRING
			}
		
		)	
 MediaCategories.associate = function(models) {
    
    MediaCategories.belongsTo(models.MediaType, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  	
    return MediaCategories;
  }

