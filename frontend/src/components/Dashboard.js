import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLegend } from 'victory';
import { FaArrowLeft } from 'react-icons/fa'; // Importando o ícone de seta para a esquerda
import { getFaturas, getFaturasByNumeroCliente } from '../services/api';

const Dashboard = () => {
  const [numeroCliente, setNumeroCliente] = useState('');
  const [energiaData, setEnergiaData] = useState([]);
  const [valorData, setValorData] = useState([]);

  useEffect(() => {
    const fetchFaturas = async () => {
      try {
        let response;
        if (numeroCliente) {
          response = await getFaturasByNumeroCliente(parseInt(numeroCliente, 10));
        } else {
          // Se nenhum número de cliente for fornecido, retorna todos os dados
          // Aqui você precisa chamar a função para obter todas as faturas
          response = await getFaturas();
          console.log('Obtendo todas as faturas...');
          return;
        }
        // Aqui você precisa mapear os dados da resposta para o formato adequado
        // e atribuí-los aos estados energiaData e valorData
        console.log('Dados filtrados:', response);
      } catch (error) {
        console.error('Erro ao buscar faturas:', error);
      }
    };

    fetchFaturas();
  }, [numeroCliente]);

  const handleChange = (event) => {
    setNumeroCliente(event.target.value);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div>
      <h2>Dashboard de Energia Elétrica</h2>
      <button onClick={handleBack} className="back-button">
        <FaArrowLeft /> Voltar
      </button>
      <div>
        <input
          type="text"
          value={numeroCliente}
          onChange={handleChange}
          placeholder="Digite o Número do Cliente"
        />
      </div>
      <div className="chart-container">
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLegend
            x={50}
            y={10}
            orientation="horizontal"
            gutter={20}
            data={[{ name: 'Energia (kWh)', symbol: { fill: 'blue' } }]}
          />
          <VictoryLine
            data={energiaData}
            x="x"
            y="y"
            style={{ data: { stroke: 'blue' } }}
          />
        </VictoryChart>
      </div>
      <div className="chart-container">
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLegend
            x={50}
            y={10}
            orientation="horizontal"
            gutter={20}
            data={[{ name: 'Valores Monetários (R$)', symbol: { fill: 'green' } }]}
          />
          <VictoryLine
            data={valorData}
            x="x"
            y="y"
            style={{ data: { stroke: 'green' } }}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default Dashboard;
