import React from "react";
import '../css/comunidade.css';
// import { User, ShoppingCart } from 'lucide-react'


function Comunidade() {
    return (
        <div className='comunidade'>
            <div className='color-title'>  
        <div>
            <img src={require('../assets/grupo2.png')} className='grupo3-imagem' alt="nome" />
            <img src={require('../assets/Grupo1.png')} className='grupo1-imagem' alt="nome" />
            <img src={require('../assets/Exposicoes.png')} className='exposicoes-imagem' alt="nome" width={800}/>
            <img src={require('../assets/grupo3.png')} className='grupo2-imagem' alt="nome" />
            <img src={require('../assets/grupo4.png')} className='grupo4-imagem' alt="nome" />
            <img src={require('../assets/grupo5.png')} className='grupo5-imagem' alt="nome" />
                <p className='titulo-page'>Exposições</p>
        </div>
{/*       
            </div>
            <div className="user-actions">
          <button  className="icon-button">
         
          </button>
          <button  className="icon-button">

          </button>
        </div>
      <main className="main">
        <h1 className="title">Comunidades</h1>
        <div className="community-grid">
          <CommunityCard title="Artistas negras" members={10589} color="orange" />
          <CommunityCard title="LGBTQ+" members={9789} color="red" />
          <CommunityCard title="Arte Game 2d" members={6846} color="blue" />
          <CommunityCard title="Arte Game 3d" members={5200} color="purple" />
          <CommunityCard title="Animação" members={7652} color="pink" />
          <CommunityCard title="Arte ceramica" members={4846} color="brown" />
        </div>
        <nav className="pagination" aria-label="Page navigation">
          <button className="page-link" aria-label="Previous page">&lt;</button>
          <button className="page-link">1</button>
          <button className="page-link">2</button>
          <button className="page-link">3</button>
          <button className="page-link">4...</button>
          <button className="page-link" aria-label="Next page">&gt;</button>
        </nav>
      </main> */}
        </div>
        </div>
    )
}

export default Comunidade;