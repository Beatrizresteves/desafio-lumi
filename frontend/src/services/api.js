// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL do seu backend
});

export const getFaturas = async () => {
  const response = await api.get('/faturas');
  return response.data;
}

export const getFaturasByNumeroCliente = async (numero_cliente) => {
	try {
	  const response = await api.get(`/faturas-por-cliente/${numero_cliente}`);
	  return response.data;
	} catch (error) {
	  throw new Error('Erro ao buscar faturas pelo número do cliente');
	}
  };

export const downloadFatura = async (id) => {
  try {
    const response = await api.get(`/api/faturas/download/${id}`, {
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    console.error('Error downloading fatura:', error);
    throw error;
  }
};
