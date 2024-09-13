import React from 'react';
import '../css/InfoP1.css';

function InfoP1() {
  return (
    <div className="info-p1">
      <div className="info-gerals">
      <div className="payment-info-container">
        <div className="shipping-info">
          <span role="img" aria-label="location">📍</span> Enviar para Rua Bacana 23
        </div>
        <div className="store-info">
          <div>Loja oficial <a href="#">Ana artesanato</a></div>
          <div>+100mil vendas</div>
        </div>
        <div className='entrega-infos'>
          <p className="entrega-info">Entrega GRáTIS: Previsto para terça-feira.</p>
        </div>
        <div className="stock-info">
          <strong>Estoque disponível </strong> (100 disponíveis)
          <div>
          <select className='qtdselect'>
            <option value="1">1 unidade</option>
            <option value="2">2 unidades</option>
            <option value="3">3 unidades</option>
            <option value="4">4 unidades</option>
            <option value="5">5 unidades</option>
            <option value="6">6 unidades</option>
            <option value="7">7 unidades</option>
            <option value="8">8 unidades</option>
            <option value="9">9 unidades</option>
            <option value="10">10 unidades</option>
            <option value="11">11 unidades</option>
            <option value="12">12 unidades</option>
            <option value="13">13 unidades</option>
            <option value="14">14 unidades</option>
          </select>
           
            </div>
        </div>
        <button className="buy-now">Comprar agora</button>
        <button className="add-to-cart">Adicionar ao carrinho</button>
        <div className="additional-info">
          <div>📦 <strong>Devolução grátis.</strong> Você tem 7 dias a partir da data de recebimento.</div>
          <div>🛡️ <strong>Compra Garantida,</strong> receba o produto que está esperando ou devolvemos o dinheiro.</div>
          <div>🛠️ <strong>12 meses de garantia de fábrica.</strong></div>
        </div>
      </div>
      <div className="Perfil-spoiler">
        
      </div>
      </div>
    </div>
  );
}

export default InfoP1;
