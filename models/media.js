module.exports = function(sequelize,DataTypes) {
	var MediaType  = sequelize.define("MediaType", {
		mediaChannel: DataTypes.STRING
		
	});
  // 	MediaType.sync().then(() => {
		//  MediaType.create({
		//     mediaChannel: 'Television',
		//   });
		//   MediaType.create({
		//     mediaChannel: 'Radio',
		//   });
		// });   
       
return MediaType;
};

    
 
 