import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/EditRemov.css';

const EditProduto = () => {
    const { id } = useParams();
    const [produto, setProduto] = useState({ nome: '', preco: '', quantidade: '', autor: '', descricao: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/produtos/EditRemov/${id}`);
                setProduto(response.data);
            } catch (error) {
                console.error('Erro ao buscar produto', error);
            }
        };
        fetchProduto();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/produtos/EditRemov/${id}`, produto);
            alert('Produto atualizado com sucesso!');
            navigate('/loja'); // Redireciona após a atualização
        } catch (error) {
            console.error('Erro ao atualizar produto', error);
        }
    };

    return (
        <div className="EditRemov">
            <div className="EditRemov-Main">
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input className="EditRemov-input" name="nome" value={produto.nome} onChange={handleChange} placeholder="Nome" required />
                    
                    <label>Preço</label>
                    <input className="EditRemov-input" name="preco" value={produto.preco} onChange={handleChange} placeholder="Preço" required />
                    
                    <label>Quantidade</label>
                    <input className="EditRemov-input" name="quantidade" value={produto.quantidade} onChange={handleChange} placeholder="Quantidade" required />
                    
                    <label>Autor</label>
                    <input className="EditRemov-input" name="autor" value={produto.autor} onChange={handleChange} placeholder="Autor" required />
                    
                    <label>Descrição</label>
                    <textarea className="EditRemov-input" name="descricao" value={produto.descricao} onChange={handleChange} placeholder="Descrição" required />

                    <button type="submit" className="EditRemov-Cadastro">Atualizar Produto</button>
                </form>
            </div>
        </div>
    );
};

export default EditProduto;
