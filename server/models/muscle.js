module.exports = (sequelize, DataTypes) => {
  let Muscle = sequelize.define('Muscle', {
    name: { type: DataTypes.STRING, allowNull: false },
    lastDay: DataTypes.DATE
  }, {
    classMethods: {
      associate: (models) => {
        Muscle.belongsToMany(models.Exercise, {
          through: 'ExerciseMuscle'
        });
      }
    }
  });
  return Muscle;
};
