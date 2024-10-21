import { useState } from 'react'
import { Star } from 'lucide-react'
import '../css/Produto1.css'
export default function ProductPage() {
  const [rating, setRating] = useState(0)

  return (
    <div className="main">
      <div className='container'>
        <div className='Container2' style={{ flex: 1, marginRight: '30px' }}>
          <img className='imagem-main'
            src="https://preview.redd.it/r6qgbeq4r6071.jpg?auto=webp&s=6fa12a1f4d57977988c9002fe904f286b11e865a" 
            alt="Product Image" 
          />
        </div>
        <div className='info-233'>
          <h1 className='titulo-produto12' >The GOAT</h1>
          <p className='descricao-produto12' >Griffith vulgo melhor personagem de todos e o aprendiz do P.DIDDY </p>
          <p className='preco-produto12' >R$650,00</p>
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
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff69b4'}> Comprar </button>
        </div>
      </div>
    </div>
  )
}