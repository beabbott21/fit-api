module.exports = (sequelize, DataTypes) => {
  let Exercise = sequelize.define('Exercise', {
    name: { type: DataTypes.STRING, allowNull: false },
    desc: { type: DataTypes.STRING, allowNull: false }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Exercise;
};
