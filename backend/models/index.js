// models/index.js

const { Sequelize } = require('sequelize');
const FaturaModel = require('./Fatura');

const sequelize = new Sequelize({
  dialect: 'postgres', // Especifique o dialeto PostgreSQL
  username: 'lumi',
  password: 'lumi',
  database: 'db_lumi',
  host: 'localhost', // Ou o host do seu banco de dados
  port: 5432 // Ou a porta do seu banco de dados
});

// Testando a conexão com o banco de dados
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
}

testConnection();

const models = {
  Faturas: FaturaModel(sequelize),
  // Outros modelos aqui, se houver
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  sequelize,
  ...models
};
