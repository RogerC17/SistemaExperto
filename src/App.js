import React from 'react';
import './styles.css';
import LoginForm from './LoginForm';
import HomePage from './HomePage';
import AsNivel from './AsNivel';
import AsMetodo from './AsMetodo';
import RegisterPage from './RegisterForm';

function App() {
  return (
    <div className="gradient-custom">
      <h1 className="fw-bold text-uppercase text-white mb-2">Bienvenido estudioso</h1>
      <RegisterPage />
    </div>
  );
}

export default App;
