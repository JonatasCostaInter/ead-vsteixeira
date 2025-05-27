import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Certificado from './components/Certificado';
import Cadastro from './components/Cadastro';  // Importar Cadastro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} /> {/* Adicionar rota de Cadastro */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/certificado" element={<Certificado />} />
      </Routes>
    </Router>
  );
}

export default App;
