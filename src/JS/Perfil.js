// Perfil.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/perfil.css';
import { useNavigate } from 'react-router-dom';

function Perfil() {
  const [activeTab, setActiveTab] = useState('midia');
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Verifica o token no localStorage ou sessionStorage
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        
        if (!token) {
          console.error('Token não encontrado. Redirecionando para o login.');
          navigate('/login'); // Redireciona para o login se o token não estiver disponível
          return;
        }

        // Faz a requisição com o token no cabeçalho
        const response = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: token,
          },
        });
        setUserData(response.data.user);
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        if (error.response && error.response.status === 401) {
          navigate('/login'); // Redireciona para o login em caso de erro de autenticação
        }
      }
    };

    fetchUserData();
  }, [navigate]);

  const renderContent = () => {
    if (activeTab === 'midia') {
      return (
        <div className="product-grid">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="product-card">
              <div className="product-image" />
              <h2 className="product-name">Nome do produto</h2>
              <p className="product-description">Descrição</p>
              <p className="product-price">R$00,00</p>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="biography-content">
          <div className="Biografy-card2">
            <div className="product-image2" />
            <p className="biografia-name">Biografia</p>
            <p className="biografia-h2">{userData ? userData.biografia : 'Carregando...'}</p>
          </div>
          <div className="Biografy-card3">
            <div className="product-image2" />
            <h2 className="titulo-estilo">Meu Estilo</h2>
            <h2 className="tipos-estilo">{userData ? userData.estilo_arte : 'Carregando...'}</h2>
            <img src={require('../assets/bioper.png')} className='bioprofile-pic' alt='Foto de Perfil' />
          </div>
        </div>
      );
    }
  };

  return (
    <div className='profile'>
      <div className='upper-container'>
        <img src={require('../assets/perfil.png')} className='profile-pic' alt='Foto de Perfil' />
        <img src={require('../assets/right-flower.png')} className='right-flower' />
        <img src={require('../assets/left-flower.png')} className='left-flower' />
      </div>

      <div className='profile-info'>
        <div className="user-info">
          <p className="user-name">{userData ? userData.nome : 'Carregando...'}</p>
          <p className="user-tag">@{userData ? userData.username : 'Carregando...'}</p>
          <button className="follow">Seguir</button>
          <button className="sino">
            <img src={require('../assets/sino.png')} alt="Notificações" />
          </button>
        </div>

        <div className="lower-container">
          <div className="linha-vertical"></div>
          <div className={`linha-horizontal-midia ${activeTab === 'midia' ? 'active' : ''}`}></div>
          <div className={`linha-horizontal-biografia ${activeTab === 'biografia' ? 'active' : ''}`}></div>
          <div className="mid-bio">
            <a href="#" className={`midia ${activeTab === 'midia' ? 'active' : ''}`} onClick={() => setActiveTab('midia')}>Mídia</a>
            <a href="#" className={`biografia ${activeTab === 'biografia' ? 'active' : ''}`} onClick={() => setActiveTab('biografia')}>Biografia</a>
          </div>
        </div>
        <div className="linha-horizontal"></div>

        {renderContent()}
      </div>
    </div>
  );
}

export default Perfil;