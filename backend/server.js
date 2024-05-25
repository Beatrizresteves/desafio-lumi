const express = require('express');
const app = express();
const models = require('./models');

app.use(express.json());

// Endpoint para obter uma fatura por ID
app.get('/faturas/:id', async (req, res) => {
  try {
    const fatura = await models.Fatura.findByPk(req.params.id);
    if (fatura) {
      res.json(fatura);
    } else {
      res.status(404).send('Fatura não encontrada');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint para criar uma nova fatura
app.post('/faturas', async (req, res) => {
  try {
    const fatura = await models.Fatura.create(req.body);
    res.status(201).json(fatura);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Outros endpoints conforme necessário...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
