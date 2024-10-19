import React, { useState } from 'react';
import axios from 'axios';
import '../css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUsername(value);
    else if (name === 'password') setPassword(value);
    setErrorMessage('');
  };

  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const isValidEmailOrUsername = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input) || input.trim().length > 0;
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValidEmailOrUsername(username)) {
      setErrorMessage('Por favor, insira um email ou username válido.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
        rememberMe,
      });
      
      if (rememberMe) {
        localStorage.setItem('token', response.data.token);
      } else {
        sessionStorage.setItem('token', response.data.token);
      }
      
      setUsername('');
      setPassword('');
      setErrorMessage('');
      navigate('/Loja');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Credenciais inválidas. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tudoo">
      <img src={require('../assets/Group 43.png')} className='fundo-login' alt="fundo-geometrico" width={950}/>
        <h2 className="form-titulo">Faça seu login</h2>
      <form onSubmit={handleSubmit} className="form-login">
        <div className="input-group">
          <h4 className="input-title">Email</h4>
          <input
            className="form-username"
            type="text"
            name="username"
            placeholder="Insira seu e-mail..."
            required
            value={username}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <h4 className="input-title">Senha</h4>
          <input
            className="form-password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Insira sua senha..."
            required
            value={password}
            onChange={handleInputChange}
          />
          <span className="password-toggle" onClick={toggleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="extras">
      
          <Link to="/esqueceu-senha" className="esqueceu-senha">Esqueceu sua senha?</Link>
        </div>
        <input className="form-submit" type="submit" value={loading ? "Carregando..." : "Entrar"} disabled={loading} />
      </form>
    </div>
  );
};

export default Login;
