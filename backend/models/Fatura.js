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
      type: DataTypes.FLOAT
    },
    valorEnergia: {
      type: DataTypes.FLOAT
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Faturas', // Defina o nome do modelo como 'Faturas'
    tableName: 'Faturas', // Defina o nome da tabela como 'Faturas'
    timestamps: true,
    underscored: true
  });

  return Fatura;
};
