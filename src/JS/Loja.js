import React, { useEffect, useState } from "react";
import axios from "axios";
import '../css/Loja.css';
import { ReactComponent as Setinha } from '../assets/setinha.svg';
import { Link } from'react-router-dom';


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
            <main className="main">
        </main>
        <div className="product-grid">
            
        <div className="produtos-lista">
                {produtos.map(produto => (
                    <div key={produto.id} className="produto-card">
                        <div className="image-placeholder"></div>
                        <div className="nomes">
                            <h2 className="product-name">{produto.nome}</h2>
                            <p className="product-price">Preço: R$ {produto.preco}</p>
                            <p className="product-description">{produto.descricao}</p>
                            <p className="quantidade-product">Quantidade disponível: {produto.quantidade}</p>
                            <p className="product-autor">Autor: {produto.autor}</p>
                        </div>
                    </div>
                ))}
               
            </div>
        </div>
        </div>
    </div>
    )
}

export default Loja;