import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleConcluir = () => {
    navigate('/certificado');
  };

  return (
    <div>
      <h2>Bem-vindo ao treinamento</h2>
      <p>Curso: Segurança Operacional Ferroviária</p>
      <button onClick={handleConcluir}>Concluir e emitir certificado</button>
    </div>
  );
};

export default Dashboard;
