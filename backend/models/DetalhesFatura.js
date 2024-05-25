// DetalhesFatura.js
module.exports = (sequelize, DataTypes) => {
  const DetalhesFatura = sequelize.define('DetalhesFatura', {
      // Definição dos campos
      // Exemplo:
      // id: {
      //     type: DataTypes.INTEGER,
      //     primaryKey: true,
      //     autoIncrement: true
      // },
      // faturaId: {
      //     type: DataTypes.INTEGER,
      //     references: {
      //         model: 'Faturas', // Nome da tabela de referência
      //         key: 'id'
      //     }
      // },
      // descricao: DataTypes.STRING
  }, {});
  DetalhesFatura.associate = function(models) {
      // Definição das associações
      // Exemplo:
      // DetalhesFatura.belongsTo(models.Fatura, { foreignKey: 'faturaId' });
  };
  return DetalhesFatura;
};
