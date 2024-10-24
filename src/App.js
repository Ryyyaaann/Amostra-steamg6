// App.js

import './App.css'
import Navbar from './JS/Navbar.js'
import React from 'react'
import { ReactComponent as Logo } from './assets/logo.svg'
import Footer from './JS/footer.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cadastro from './JS/Cadastro.js'
import Login from './JS/Login.js'
import Home from './JS/Home.js'
import Sobre from './JS/Sobre.js'
import Loja from './JS/Loja.js'
import Comunidade from './JS/Comunidade'
import Perfil from './JS/Perfil'
import ProductPage from './JS/Produto1.js'
import Suporte from './JS/Suporte.js'
import CP0 from './JS/Cadastro-p'
import EditProduto from './JS/EditRemov.Js'
import Carrinho from './JS/Carrinho.js';
import DeleteProduto from './JS/Delete.js'




function App() {
  return (
    <header>
        <Router>
          <div className="App">
            <Navbar/>
            <Logo className="App-logo"/>
          </div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Sobre" element={<Sobre/>} />
            <Route exact path="/cadastro" element={<Cadastro/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/loja" element={<Loja/>} />
            <Route exact path="/Lojalogin" element={<Loja/>} />
            <Route exact path="/Comunidade" element={<Comunidade/>} />
            <Route exact path="/Perfil" element={<Perfil/>} />
            <Route exact path="/produto/:id" element={<ProductPage/>} />
            <Route exact path="/Suporte" element={<Suporte/>} />
            <Route exact path="/cp0" element={<CP0/>} />
            <Route exact path="/Carrinho" element={<Carrinho/>} />
            <Route exact path="/EditRemov/:id" element={<EditProduto/>} />
            <Route exact path="/deletar/:id" element={<DeleteProduto/>} />
          </Routes>
        <Footer/>
        </Router>
      </header>
  );
}

export default App;
