'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Faturas', [
      {
        referencia: 'JAN/2023',
        quantidadeEnergia: 100,
        valorEnergia: 50.25,
        quantidadeSCEEE: 80,
        valorSCEEE: 30.75,
        quantidadeCompensada: 20,
        valorCompensada: 10.50,
        valorIluminacaoPublica: 43.10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Desfazer a inserção dos dados
    return queryInterface.bulkDelete('Faturas', null, {});
  }
};
