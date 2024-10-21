import { useState } from 'react'
import { Star } from 'lucide-react'
import '../css/Produto1.css'
export default function ProductPage() {
  const [rating, setRating] = useState(0)
  const [showMessage, setShowMessage] = useState(false);

  const handleBuyClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // Mensagem desaparece após 3 segundos
  };
  return (
    <div className="main">
      <div className='container'>
        <div className='Container2' style={{ flex: 1, marginRight: '30px' }}>
          <img className='imagem-main'
            src={require('../assets/gatobaiacu.jpg')} alt="mulher"
            alt="Gato Baiacu" 
          />
        </div>
        <div className='info-233'>
          <h1 className='titulo-produto12' >Um Gato Baiacu</h1>
          <p className='descricao-produto12' >Um gato Baiacu fofo e engraçado </p>
          <p className='preco-produto12' >R$150,00</p>
          <div className='avaliacao-produto12' >
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={24}
                fill={star <= rating ? '#ffd700' : 'none'}
                stroke={star <= rating ? '#ffd700' : '#ccc'}
                style={{ cursor: 'pointer', marginRight: '5px' }}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <button className='botao-compra12' style={{}}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff1493'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff69b4'} 
          onClick={handleBuyClick}
          > Comprar </button>
            {showMessage && (
            <div className="mensagem-sucesso">
              Produto adicionado ao carrinho!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}