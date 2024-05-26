// migrations/YYYYMMDDHHMMSS-create_faturas_table.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fatura', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      referencia: {
        type: Sequelize.STRING
      },
      quantidadeEnergia: {
        type: Sequelize.FLOAT
      },
      valorEnergia: {
        type: Sequelize.FLOAT
      },
      quantidadeSCEEE: {
        type: Sequelize.FLOAT
      },
      valorSCEEE: {
        type: Sequelize.FLOAT
      },
      quantidadeCompensada: {
        type: Sequelize.FLOAT
      },
      valorCompensada: {
        type: Sequelize.FLOAT
      },
      valorIluminacaoPublica: {
        type: Sequelize.FLOAT
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Fatura');
  }
};
