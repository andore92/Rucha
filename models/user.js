module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    user_name: {
      type: DataTypes.STRING
    },
    user_password: {
      type: DataTypes.STRING
    } 
  });
  return user;
};
