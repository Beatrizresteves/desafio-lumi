const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();
const faturaController = require('./controllers/faturaController');

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL do seu backend
});

app.use(cors());
app.use(express.json());

// Rota para obter uma fatura pelo ID
app.get('/faturas/:id', faturaController.getFaturaById);

// Rota para obter todas as faturas
app.get('/faturas', faturaController.faturas);

// Rota para criar uma nova fatura
app.post('/faturas', faturaController.createFatura);

// Rota para obter as faturas de um cliente específico
app.get('/faturas-por-cliente/:numero_cliente', faturaController.getFaturasByNumeroCliente);

// Rota para fazer o download de uma fatura
app.post('/faturas-download', faturaController.downloadFatura);

// Outros endpoints conforme necessário...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
