module.exports = function(sequelize,DataTypes) {
	var	MediaCategories = sequelize.define("MediaCategories",{
				CategoryType: DataTypes.STRING
			}
		// 	,
		// 	{
		// 	classMethods: {
		// 		associate : function(models) {
		// 				MediaCategories.belongsTo(models.MediaType,{
		// 					   foreignKey: {
		// 					   		 allowNull:false
	 //     						 }
	 //     				});
		//  	 	}
		// 	}
		// }
		)	
 MediaCategories.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    MediaCategories.belongsTo(models.MediaType, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  	
    return MediaCategories;
  }

