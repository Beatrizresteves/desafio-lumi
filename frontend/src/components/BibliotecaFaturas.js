import React, { useState, useEffect, useCallback } from 'react';
import { getFaturasByNumeroCliente, downloadFatura } from '../services/api';

const BibliotecaFaturas = () => {
  const [numero_cliente, setNumeroCliente] = useState('');
  const [faturas, setFaturas] = useState([]);

  const handleInputChange = (event) => {
	const numeroCliente = parseInt(event.target.value, 10);
    setNumeroCliente(numeroCliente);
  };

  const fetchFaturas = useCallback(async () => {
    try {
      const response = await getFaturasByNumeroCliente(numero_cliente);
      setFaturas(response);
    } catch (error) {
      console.error('Error fetching faturas:', error);
    }
  }, [numero_cliente]);

  const handleDownload = async (id) => {
    try {
      const response = await downloadFatura(id);
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `fatura_${id}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading fatura:', error);
    }
  };

  useEffect(() => {
    if (numero_cliente) {
      fetchFaturas();
    }
  }, [numero_cliente, fetchFaturas]);

  return (
    <div>
      <h2>Biblioteca de Faturas</h2>
      <input
        type="text"
        value={numero_cliente}
        onChange={handleInputChange}
        placeholder="Digite o Número do Cliente"
      />
      <button onClick={fetchFaturas} className='buttonFat'>Buscar Faturas</button>
      <ul>
        {faturas.map((fatura) => (
          <li key={fatura.id}>
            {fatura.referencia} - <button onClick={() => handleDownload(fatura.id)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BibliotecaFaturas;
