'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Faturas', 'numero_cliente', {
      type: Sequelize.STRING,
      allowNull: true, // Permitir valores nulos temporariamente
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Faturas', 'numero_cliente');
  }
};
