// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import BibliotecaFaturas from './components/BibliotecaFaturas';
import './App.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bem-vindo!</h1>
      <p>Escolha uma opção:</p>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/biblioteca-faturas" className="nav-link">Biblioteca de Faturas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/biblioteca-faturas" element={<BibliotecaFaturas />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
