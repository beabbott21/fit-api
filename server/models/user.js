module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: { type: DataTypes.STRING, allowNull: false },
    dob: { type: DataTypes.DATEONLY, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    height: { type: DataTypes.INTEGER, allowNull: false },
    weight: { type: DataTypes.INTEGER, allowNull: false },
    activity: { type: DataTypes.STRING, allowNull: false },
    goal: { type: DataTypes.STRING, allowNull: false }
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Meal, {
          foreignKey: 'userId',
          as: 'meals'
        });
      }
    }
  });
  return User;
};
