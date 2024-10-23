// Delete.js

import React from 'react';
import axios from 'axios';
import {useParams, useNavigate } from 'react-router-dom';

const DeleteProduto = () => {
    const { id } = useParams();
    const history = useNavigate();

    const handleDelete = async () => {
        console.log("Deletando produto com ID:", id);
        try {
            await axios.delete(`http://localhost:5000/api/produtos/deletar/${id}`);
            alert('Produto deletado com sucesso!');
            navigate('/loja');
        } catch (error) {
            console.error('Erro ao deletar produto', error.response ? error.response.data : error);
            alert('Erro ao deletar produto.');
        }        
    };
    

    return (
        <div>
            <h2>Tem certeza que deseja deletar este produto?</h2>
            <button onClick={handleDelete}>Deletar Produto</button>
            <button onClick={() => history.push('/')}>Cancelar</button>
        </div>
    );
};

export default DeleteProduto;