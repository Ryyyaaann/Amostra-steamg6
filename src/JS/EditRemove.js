import React from "react";
import axios from "axios";
import '../css/EditRemove.css'



const EditRemov = () => {
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
return(
<div className="Pedro">
            {produtos.map(produto => (
                <div key={produto.id} className="produto-card">
                    <h2>{produto.nome}</h2>
                    <p>Preço: R$ {produto.preco}</p>
                    <p>Autor: {produto.autor}</p>
                    <p>{produto.descricao}</p>
                    <p>Quantidade disponível: {produto.quantidade}</p>
                    <button onClick={() => handleDelete(produto.id_produto)}>Remover</button>
                </div>
            ))}
    </div>

);

}

export default EditRemov;