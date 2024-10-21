import React, { useState } from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { ReactComponent as PerfilIcon } from '../assets/perfil-icon.svg';
import { ReactComponent as McQueen } from '../assets/carrinho.svg';
import { ReactComponent as MoonIcon } from '../assets/moon-icon.svg'; // ícone de lua

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <ul className="navbar-nav">
        {/* Links da Navbar */}
        <li className="nav-item">
          <Link to="/" className={`nav-link ${darkMode ? 'dark-mode' : ''}`}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/loja" className={`nav-link ${darkMode ? 'dark-mode' : ''}`}>Loja</Link>
        </li>
        <li className="nav-item">
          <Link to="/Sobre" className={`nav-link ${darkMode ? 'dark-mode' : ''}`}>Sobre</Link>
        </li>
        <li className="nav-item">
          <Link to="/Comunidade" className={`nav-link ${darkMode ? 'dark-mode' : ''}`}>Comunidade</Link>
        </li>
        <li className="nav-item">
          <Link to="/Carrinho" className={`nav-link-carrinho ${darkMode ? 'dark-mode' : ''}`}><McQueen /></Link>
        </li>
        <li className="nav-item">
          <Link to="/Perfil" className={`nav-link-perfil ${darkMode ? 'dark-mode' : ''}`}>Perfil</Link>
        </li>
        {/* Botão de Lua */}
        <li className="nav-item">
          <button onClick={toggleDarkMode} className="dark-mode-toggle">
            <MoonIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
