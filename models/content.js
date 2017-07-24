module.exports = function(sequelize,DataTypes) {
	{force:false}
	var	MediaSchedule = sequelize.define("MediaSchedule",{
				AirTime: DataTypes.DATE,
				duration: DataTypes.INTEGER,
				MediaUrl: DataTypes.STRING
			}
			)
	// 		,
	// 		{
	// 		classMethods: {
	// 			associate : function(models) {
	// 					MediaSchedule.belongsTo(models.MediaCategories,{
	// 						   foreignKey: {
	// 						   		 allowNull:false
	//      						 }
	//      				});
	// 	 	 	}
	// 		}	
	// }
 MediaSchedule.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    MediaSchedule.belongsTo(models.MediaCategories, {
      foreignKey: {
        allowNull: false
      }
    });	
	};	
    return MediaSchedule;
  
}



