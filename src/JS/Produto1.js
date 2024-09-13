import React from 'react';
import '../css/Produto1.css';
import InfoP1 from '../JS/InfoP1';
import imgtemp from '../assets/imgtemp.png';

function Produto1() {
    const thumbnails = [imgtemp, imgtemp, imgtemp];
  return (
    <div className="produto">
        <div className="product-container">
        <img src={require('../assets/imgtemp.png')} alt='' className='Img-principal'/>
        <div className="product-thumbnails">
          {thumbnails.map((thumbnail, index) => (
            <img key={index} src={thumbnail} alt={`Imagem ${index + 1}`} className='thumbnail' />
          ))}
        </div>
        <div className="product-main-container"> 
            <div className='infoproduto'>
                <div className="product-header">
                    <span>Novo | +1000 vendidos</span>
                    <span className="favorite-icon">❤️</span>
                </div>
                <h1 className='produto-name'>Jardim da Eternidade: Florescendo em Grandeza</h1>
                <div className="rating">
                    ⭐⭐⭐⭐☆ (60)
                </div>
                <div className="price">
                    <span className="discounted-price">R$ 75,90</span>
                    <span className="discount">30% OFF</span>
                    <div className="installments">em 10x R$7,59 sem juros</div>
                </div>
                <button className="deal-button">OFERTA DO DIA</button>
                <a href="#" className="payment-link">Ver os meios de pagamento</a>
                <div className="product-details">
                    <h2>O que você precisa saber sobre este produto</h2>
                    <ul>
                    <li>Cativante Expressão Florida</li>
                    <li>Arte Original e Exclusiva</li>
                    <li>Confeccionado com Autenticidade</li>
                    <li>Moldura Clássica Inclusa</li>
                    <li>Presente Memorável</li>
                    </ul>
                    <a href="#" className="details-link">Ver todas as características</a>
                </div>
            </div>
                <InfoP1/>
            </div>
        </div>
    </div>
  );
}

export default Produto1;
