import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import '../css/carrinho.css';

// Importa as imagens locais corretamente
import imagem22 from '../assets/gatobaiacu.jpg';
import imagem23 from '../assets/oncaskate.jpg';
import imagem24 from '../assets/peixefone.jpg';

export default function Carrinho() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Caska a braba', price: 150.00 , quantity: 1, image: imagem22 },
    { id: 2, name: 'Guts o brabo', price: 30.00, quantity: 2, image: imagem23 },
    { id: 3, name: 'The GOAT', price: 450.00, quantity: 1, image: imagem24 },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="page">
      <div className="container-cart">
        <h1 className="header">Seu Carrinho de Compras</h1>
        {cartItems.map(item => (
          <div key={item.id} className="cartItem">
            <img src={item.image} alt={item.name} className="itemImage" />
            <div className="itemDetails">
              <h3 className="itemName">{item.name}</h3>
              <p className="itemPrice">R$ {item.price.toFixed(2)}</p>
            </div>
            <div className="quantityControl">
              <button className="quantityButton" onClick={() => updateQuantity(item.id, -1)}>
                <Minus size={16} />
              </button>
              <span className="quantity">{item.quantity}</span>
              <button className="quantityButton" onClick={() => updateQuantity(item.id, 1)}>
                <Plus size={16} />
              </button>
            </div>
            <button className="removeButton" onClick={() => removeItem(item.id)}>
              <Trash2 size={20} />
            </button>
          </div>
        ))}
        <div className="summary">
          <p className="total">Total: R$ {total.toFixed(2)}</p>
          <button 
            className="checkoutButton"
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FF1493'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FF69B4'}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}
