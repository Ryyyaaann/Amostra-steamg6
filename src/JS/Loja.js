import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/Loja.css';
import { Link } from "react-router-dom";


const Loja = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const fetchProdutos = async () => {
            try{
                const response = await axios.get('http://localhost:5000/api/produtos/loja');
                setProdutos(response.data);
            }catch (error){
                console.error('Erro ao buscar', error);
            }
        }

        fetchProdutos();
    }, [])
    return (
        <div className='loja'>
        <div>
            <img src={require('../assets/grupo2.png')} className='grupo3-imagem' alt="nome" />
            <img src={require('../assets/Grupo1.png')} className='grupo1-imagem' alt="nome" />
            <img src={require('../assets/Exposicoes.png')} className='exposicoes-imagem' alt="nome" width={800}/>
            <img src={require('../assets/grupo3.png')} className='grupo2-imagem' alt="nome" />
            <img src={require('../assets/grupo4.png')} className='grupo4-imagem' alt="nome" />
            <img src={require('../assets/grupo5.png')} className='grupo5-imagem' alt="nome" />
                <p className='titulo-page'>Exposições</p>
        </div>
      
            <div className='Pedro'>
           
            {/* <div className="product-item">
                <h2>Arte mulher</h2>
                <p>Descrição basica</p>
                <p>Preço: R$</p>
            </div> */}
             <a href='/CP0' className='botao-perfiladicionar'><button>Adicionar produto</button></a>
        <div className="product-grid">
            
        <div className="produtos-lista">
               <a href="Produto1" className="produtos-lista">
               {produtos.map(produto => (
    <div key={produto.id_produto} className="produto-card">
    <Link className="links12" to={`/produto/${produto.id_produto}`}>  {/* Link dinâmico para a página do produto */}
      <div className="image-placeholder">
        <img className='image-placeholder'
          src={`http://localhost:5000${produto.imagem_url}`} // Certifique-se de que as imagens estão vindo corretamente
          alt={produto.nome} 
        />
      </div>
      <div className="nomes">
        <h2 className="product-name">{produto.nome}</h2>
        <p className="product-price">Preço: R$ {produto.preco}</p>
        <p className="product-description">{produto.descricao}</p>
      </div>
    </Link>
    </div>
    ))}
               </a>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Loja;