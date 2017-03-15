module.exports = {
  up: (queryInterface, Sequelize) =>
     queryInterface.createTable('Users', {
       id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER
       },
       name: {
         type: Sequelize.STRING,
         allowNull: false
       },
       dob: {
         type: Sequelize.DATEONLY,
         allowNull: false
       },
       gender: {
         type: Sequelize.STRING,
         allowNull: false
       },
       height: {
         type: Sequelize.INTEGER,
         allowNull: false
       },
       weight: {
         type: Sequelize.INTEGER,
         allowNull: false
       },
       activity: {
         type: Sequelize.STRING,
         allowNull: false
       },
       goal: {
         type: Sequelize.STRING,
         allowNull: false
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
  down: (queryInterface) => queryInterface.dropTable('Users')
};
