module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      servingSize: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fat: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      protein: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      carbs: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Food')
};
