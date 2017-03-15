module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define('Food', {
    name: { type: DataTypes.STRING, allowNull: false },
    servingSize: { type:  DataTypes.INTEGER, allowNull: false },
    fat: { type:  DataTypes.INTEGER, allowNull: false },
    protein: { type:  DataTypes.INTEGER, allowNull: false },
    carbs: { type:  DataTypes.INTEGER, allowNull: false }
  }, {
    classMethods: {
      associate: (models) => {
        Food.belongsToMany(models.Meal, { through: 'MealFood' });
      }
    }
  });
  return Food;
};
