import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { ReactComponent as PerfilIcon } from '../assets/perfil-icon.svg';
import { ReactComponent as McQueen } from '../assets/carrinho.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/loja" className="nav-link">Loja</Link>
        </li>
        <li className="nav-item">
          <Link to="/Sobre" className="nav-link">Sobre</Link>
        </li>
        <li className="nav-item">
          <Link to="/Comunidade" className="nav-link">Comunidade</Link>
        </li>
        <li className="nav-item">
          <Link to="/Perfil" className="nav-link-carrinho"><McQueen /></Link>
        </li>
        <li className="nav-item">
          <Link to="/Perfil" className="nav-link-perfil">Perfil</Link>
        </li>
        <li className="nav-item">
          <Link to="/Perfil" className="nav-link-icon">
            <div className="circle"></div>
            <PerfilIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
