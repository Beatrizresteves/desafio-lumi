// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL do seu backend
});

export const getFaturas = async () => {
  const response = await api.get('/faturas');
  return response.data;
};
