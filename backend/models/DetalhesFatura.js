// models/DetalhesFatura.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const DetalhesFatura = sequelize.define('DetalhesFatura', {
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantidade_kwh: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = DetalhesFatura;
