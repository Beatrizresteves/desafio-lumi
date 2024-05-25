'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetalhesFatura', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidadeEnergia: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      valorEnergia: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      quantidadeSCEEE: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      valorSCEEE: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      quantidadeCompensada: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      valorCompensada: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      valorIluminacaoPublica: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      faturaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Faturas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetalhesFatura');
  }
};
