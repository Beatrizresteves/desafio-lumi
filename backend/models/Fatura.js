const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Fatura extends Model {
    static associate(models) {
      // Defina associações aqui, se necessário
    }
  }

  Fatura.init({
      referencia: {
        type: DataTypes.STRING,
        allowNull: false
      },
      quantidadeEnergia: {
        type: DataTypes.FLOAT,
        field: 'quantidadeEnergia' // Nome da coluna no banco de dados
      },
      valorEnergia: {
        type: DataTypes.FLOAT,
        field: 'valorEnergia' // Nome da coluna no banco de dados
      },
      quantidadeSCEEE: {
        type: DataTypes.FLOAT,
        field: 'quantidadeSCEEE' // Nome da coluna no banco de dados
      },
      valorSCEEE: {
        type: DataTypes.FLOAT,
        field: 'valorSCEEE' // Nome da coluna no banco de dados
      },
      quantidadeCompensada: {
        type: DataTypes.FLOAT,
        field: 'quantidadeCompensada' // Nome da coluna no banco de dados
      },
      valorCompensada: {
        type: DataTypes.FLOAT,
        field: 'valorCompensada' // Nome da coluna no banco de dados
      },
      valorIluminacaoPublica: {
        type: DataTypes.FLOAT,
        field: 'valorIluminacaoPublica' // Nome da coluna no banco de dados
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'createdAt' // Nome da coluna no banco de dados
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'updatedAt' // Nome da coluna no banco de dados
      }
    }, {
      sequelize,
      modelName: 'Faturas',
      tableName: 'Faturas',
      timestamps: false,
      underscored: true
    });
    
  return Fatura;
};
