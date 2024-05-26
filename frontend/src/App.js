import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import BibliotecaFaturas from './components/BibliotecaFaturas';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/biblioteca-faturas" element={<BibliotecaFaturas />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
