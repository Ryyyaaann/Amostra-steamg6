import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteProduct = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/produtos/deletar/${id}`);
            setMessage(response.data.message);
            setTimeout(() => {
                navigate('/loja');
            }, 2000);
        } catch (error) {
            setMessage('Erro ao deletar produto.');
        }
    };

    useEffect(() => {
        if (!id) {
            setMessage('ID do produto não fornecido.');
        }
    }, [id]);

    return (
        <div>
            <h2>Deletar Produto</h2>
            <p>Tem certeza que deseja deletar o produto com ID: {id}?</p>
            <button onClick={handleDelete}>Deletar</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default DeleteProduct;
