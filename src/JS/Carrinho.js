import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import '../css/carrinho.css';

export default function Carrinho() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (id, change) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
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
              <p className="itemPrice">R$ {Number(item.price).toFixed(2)}</p>
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
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#FF1493')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#FF69B4')}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}
