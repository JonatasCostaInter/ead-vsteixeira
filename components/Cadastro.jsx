import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from '../firebaseConfig';  // Importar configuração Firebase
import { initializeApp } from 'firebase/app';

// Inicializa o Firebase
initializeApp(firebaseConfig);

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      // Cria o usuário no Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Cadastro realizado com sucesso!');
      setError('');
    } catch (err) {
      setError('Erro ao cadastrar. Tente novamente!');
      setSuccess('');
    }
  };

  return (
    <div>
      <h2>Cadastrar</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Cadastro;
