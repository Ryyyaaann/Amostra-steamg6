import React from "react";
import '../css/Loja.css';
import { ReactComponent as Setinha } from '../assets/setinha.svg';
import { Link } from'react-router-dom';


function Loja() {
    return (
        <div className='loja'>
        <div>
            <img src={require('../assets/grupo2.png')} className='grupo3-imagem' alt="nome" />
            <img src={require('../assets/Grupo1.png')} className='grupo1-imagem' alt="nome" />
            <img src={require('../assets/Exposicoes.png')} className='exposicoes-imagem' alt="nome" width={800}/>
            <img src={require('../assets/grupo3.png')} className='grupo2-imagem' alt="nome" />
            <img src={require('../assets/grupo4.png')} className='grupo4-imagem' alt="nome" />
            <img src={require('../assets/grupo5.png')} className='grupo5-imagem' alt="nome" />
                <p className='titulo-page'>Exposições</p>
        </div>
      
            <div className='Pedro'>
           
            {/* <div className="product-item">
                <h2>Arte mulher</h2>
                <p>Descrição basica</p>
                <p>Preço: R$</p>
            </div> */}
            <main className="main">
        
                <div className="product-grid">
                    
                    <div  className="product-card">
                        <div className="product-image" />
                        <h2 className="product-name">nome</h2>
                        <p className="product-description">descrição</p>
                        <p className="product-price">R$30,00</p>
                    </div>

                    <div  className="product-card">
                        <div className="product-image" />
                        <h2 className="product-name">nome</h2>
                        <p className="product-description">descrição</p>
                        <p className="product-price">R$30,00</p>
                    </div>
                    <div  className="product-card">
                        <div className="product-image" />
                        <h2 className="product-name">nome</h2>
                        <p className="product-description">descrição</p>
                        <p className="product-price">R$30,00</p>
                    </div>

                    <div  className="product-card">
                        <div className="product-image" />
                        <h2 className="product-name">nome</h2>
                        <p className="product-description">descrição</p>
                        <p className="product-price">R$30,00</p>
                    </div>

                    <div  className="product-card">
                        <div className="product-image" />
                        <h2 className="product-name">nome</h2>
                        <p className="product-description">descrição</p>
                        <p className="product-price">R$30,00</p>
                    </div>

                    <div  className="product-card">
                        <div className="product-image" />
                        <h2 className="product-name">nome</h2>
                        <p className="product-description">descrição</p>
                        <p className="product-price">R$30,00</p>
                    </div>

                    <div  className="product-card">
                        <div className="product-image" />
                        <h2 className="product-name">nome</h2>
                        <p className="product-description">descrição</p>
                        <p className="product-price">R$30,00</p>
                    </div>

                    <div  className="product-card">
                        <div className="product-image" />
                        <h2 className="product-name">nome</h2>
                        <p className="product-description">descrição</p>
                        <p className="product-price">R$30,00</p>
                    </div>

                    <div  className="product-card">
                        <div className="product-image" />
                        <h2 className="product-name">nome</h2>
                        <p className="product-description">descrição</p>
                        <p className="product-price">R$30,00</p>
                    </div>

                    <div  className="product-card">
                        <div className="product-image" />
                        <h2 className="product-name">nome</h2>
                        <p className="product-description">descrição</p>
                        <p className="product-price">R$30,00</p>
                    </div>
            
                </div>
        </main>
            
        </div>
        </div>
    )
}

export default Loja;