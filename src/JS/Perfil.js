import React, { useState } from 'react';
import '../css/perfil.css';

function Perfil() {
  const [activeTab, setActiveTab] = useState('midia');

  const renderContent = () => {
    if (activeTab === 'midia') {
      return (
        <div className="product-grid">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="product-card">
              <div className="product-image" />
              <h2 className="product-name">nome</h2>
              <p className="product-description">descrição</p>
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
                <p className="biografia-h2">Sou Ana Beatriz, uma artista multifacetada, apaixonada por Web Design, Ilustrações 2D e Modelagem 3D. Nascida em Salvador, 
                    Bahia. Além disso, a confecção de artes digitais é meu hobby, uma expressão livre da minha criatividade. Estou entusiasmada em ingressar em uma plataforma que apoia
                     e celebra artistas mulheres, proporcionando um espaço exclusivo para nossa expressão artística.</p>
            </div>
            <div className="Biografy-card3">
                <div className="product-image2" />
                <h2 className="titulo-estilo">Meu Estilo</h2>
                <h2 className="tipos-estilo">Web design e Ilustrações 2D.</h2>
                <h2 className="tipos-estilo">Edição e Modelagem 3D.</h2>
                <h2 className="tipos-estilo">Fotografias</h2>
                <img src={require('../assets/bioper.png')} className='bioprofile-pic' alt='Foto de Perfil' />
           
            </div>
            <div className="Biografy-card2">
                <p className='titulo-canais'>Comunidades - Canais</p>
               
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
                    <p className="user-name">YeesArtgirl</p>
                    <p className="user-tag">@Girl_Art</p>
                    <button className="follow">Seguir</button>
                    <button className="sino">
                        <img src={require('../assets/sino.png')} />
                    </button>
        </div>

        <div className="edit-profile">
                    <p className="edit-text">Editar perfil</p>
                    <button className="pencil-button">
                        <img src={require('../assets/pencil.png')} className='pencil-img' />
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