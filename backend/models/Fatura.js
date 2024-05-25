// Faturas.js
module.exports = (sequelize, DataTypes) => {
  const Fatura = sequelize.define('Fatura', {
      // Definição dos campos
      // Exemplo:
      // id: {
      //     type: DataTypes.INTEGER,
      //     primaryKey: true,
      //     autoIncrement: true
      // },
      // nome: DataTypes.STRING
  }, {});
  Fatura.associate = function(models) {
      // Definição das associações
  };
  return Fatura;
};