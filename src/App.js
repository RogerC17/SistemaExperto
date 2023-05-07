import React from 'react';
import './styles.css';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import AsNivel from './AsNivel';
import AsMetodo from './AsMetodo';

function App() {
  return (
    <div className="gradient-custom">
      <h1 className="fw-bold text-uppercase text-white mb-2">Bienvenido estudioso</h1>
      <AsMetodo />
    </div>
  );
}

export default App;
