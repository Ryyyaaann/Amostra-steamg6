import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import axios from 'axios';
import '../css/Produto1.css';

export default function ProductPage() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [rating, setRating] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/produtos/Lucci/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    fetchProduto();
  }, [id]);

  const handleBuyClick = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productInCart = cart.find((item) => item.id === produto.id_produto);

    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.push({
        id: produto.id_produto,
        name: produto.nome,
        price: produto.preco,
        quantity: 1,
        image: `http://localhost:5000${produto.imagem_url}`,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  if (!produto) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="baiacu">
      <div className="main">
        <div className="container">
          <div className="Container2" style={{ flex: 1, marginRight: '30px' }}>
            <img
              className="imagem-main"
              src={`http://localhost:5000${produto.imagem_url}`}
              alt={produto.nome}
            />
          </div>
          <div className="info-233">
            <h1 className="titulo-produto12">{produto.nome}</h1>
            <p className="descricao-produto12">{produto.descricao}</p>
            <p className="preco-produto12">R${produto.preco}</p>
            <div className="avaliacao-produto12">
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
            <button
              className="botao-compra12"
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff1493')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff69b4')}
              onClick={handleBuyClick}
            >
              Comprar
            </button>
            {showMessage && <div className="mensagem-sucesso">Produto adicionado ao carrinho!</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
