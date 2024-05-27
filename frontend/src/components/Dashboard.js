import React, { useState, useEffect } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLegend } from 'victory';
import { FaArrowLeft } from 'react-icons/fa';
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
          response = await getFaturasByNumeroCliente(numeroCliente);
        } else {
          response = await getFaturas();
        }
        const energiaDataFormatted = response.map(fatura => ({
          x: fatura.referencia,
          y: fatura.quantidadeEnergia
        }));
        const valorDataFormatted = response.map(fatura => ({
          x: fatura.referencia,
          y: fatura.valorEnergia + fatura.valorSCEEE + fatura.valorIluminacaoPublica
        }));
        setEnergiaData(energiaDataFormatted);
        setValorData(valorDataFormatted);
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
      <div className="navigation">
        <button onClick={() => window.history.back()} className="back-button">
          <FaArrowLeft /> Voltar
        </button>
      </div>
      <div  style={{ textAlign: 'center' }}>
        <input
          type="text"
          value={numeroCliente}
          onChange={handleChange}
          placeholder="Digite o número do cliente"
        />
      </div>
	  <div className='chart-grafic'>
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
    </div>
  );
};

export default Dashboard;
