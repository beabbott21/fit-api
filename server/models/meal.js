module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: { type: DataTypes.STRING, allowNull: false },
    day: { type: DataTypes.DATE, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false }
  }, {
    classMethods: {
      associate: (models) => {
        Meal.hasMany(models.Food, {
          foreignKey: 'mealId',
          as: 'food'
        });
        Meal.belongsTo(models.User, {
          foreignKey: 'userId'
        });
      }
    }
  });
  return Meal;
};
