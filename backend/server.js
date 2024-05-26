const express = require('express');
const app = express();
const faturaController = require('./controllers/faturaController');

app.use(express.json());

// Rota para obter uma fatura pelo ID
app.get('/faturas/:id', faturaController.getFaturaById);

app.get('/faturas/', faturaController.faturas);
// Rota para criar uma nova fatura
app.post('/faturas', faturaController.createFatura);

// Outros endpoints conforme necessário...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
