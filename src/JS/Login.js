import React, { useState } from 'react';
import axios from 'axios';
import '../css/login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    setErrorMessage('');
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isValidEmail(username)) {
      setErrorMessage('Por favor, insira um email válido.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password
      });

      localStorage.setItem('token', response.data.token);

      setUsername('');
      setPassword('');
      setErrorMessage('');

      navigate('/Loja');
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
      }
    }
  };

  return (
    <div className='tudoo'>
      <br />
      <form onSubmit={handleSubmit} className='form-login'>
        <h2 className='form-titulo'>LOGIN</h2>
        <button type="button" className='Botao-Google'>
          <img className='Google-Imagem' src={require('../assets/Google.png')} alt=""/>
          Continue com o Google
        </button>
        <input
          className='form-username' 
          type="text" 
          id="username" 
          name="username" 
          placeholder="Email" 
          required 
          value={username} 
          onChange={handleInputChange}
        />
        <br />
        <input 
          className='form-password'
          type="password" 
          id="password" 
          name="password" 
          placeholder="Senha" 
          required
          value={password} 
          onChange={handleInputChange} 
        />
        <br />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <br />
        <a href=''>
            <div className="esqueceu-senha">
                <p>Esqueceu sua senha?</p>
            </div>
        </a>    
        <br />
        <br />
        <input className='form-submit' type="submit" />
      </form>
    </div>
  );
};

export default Login;
