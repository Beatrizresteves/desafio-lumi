import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

const Dashboard = () => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 7 },
    { x: 5, y: 11 }
  ];

  return (
    <div>
      <h2>Dashboard de Energia Elétrica</h2>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          data={data}
          x="x"
          y="y"
        />
      </VictoryChart>
    </div>
  );
};

export default Dashboard;
