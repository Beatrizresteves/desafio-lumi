const models = require('../models');

// Função para obter uma fatura pelo ID
exports.getFaturaById = async (req, res) => {
  try {
    console.log('ID da fatura:', req.params.id);
    console.log('Modelo de fatura:', models.Faturas);
    const fatura = await models.Faturas.findByPk(req.params.id);
    
    if (fatura) {
      res.json(fatura);
    } else {
      res.status(404).send('Fatura não encontrada');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Função para criar uma nova fatura
exports.createFatura = async (req, res) => {
  try {
    const fatura = await models.Faturas.create(req.body);
    res.status(201).json(fatura);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
