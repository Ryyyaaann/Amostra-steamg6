import React from "react";
import axios from "axios";
import '../css/cp0.css'

class CP0 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            preco: "",
            quantidade: "",
            autor: "",
            descricao: "",
            imagem: null
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFileChange = (event) => {
        this.setState({ imagem: event.target.files[0] });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { nome, preco, quantidade, autor, descricao, imagem } = this.state;

        const formData = new FormData();
        formData.append("nome", nome);
        formData.append("preco", preco);
        formData.append("quantidade", quantidade);
        formData.append("autor", autor);
        formData.append("descricao", descricao);
        formData.append("imagem", imagem);  // Adiciona a imagem ao formData

        try {
            const response = await axios.post('http://localhost:5000/api/produtos/cp0', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            this.setState({
                nome: "",
                preco: "",
                quantidade: "",
                autor: "",
                descricao: "",
                imagem: null
            });
        } catch (error) {
            console.log("Erro ao cadastrar produto", error);
        }
    };

    render() {
        const { nome, preco, quantidade, autor, descricao } = this.state;

        return (
            <div className="Cadastro-P">
                <section className="secao">
                    <h1>Cadastro produto</h1>
                </section>
                <img src={require('../assets/fundinho-cp0.png')} alt="fundinho" className="CP-imagem" id="CP-imagem2" />
                <main className="CP-Main">
                    <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                        {/* Campos de cadastro */}
                        <label>Nome do produto:</label>
                        <input name="nome" value={nome} type="text" placeholder="Nome do produto" onChange={this.handleInputChange} className="CP-input" required />
                        
                        <label>Preço do produto:</label>
                        <input name="preco" type="number" value={preco} placeholder="Preço do produto" onChange={this.handleInputChange} className="CP-input" required />
                        
                        <label>Quantidade do produto:</label>
                        <input name="quantidade" type="number" value={quantidade} placeholder="Quantidade do produto" onChange={this.handleInputChange} className="CP-input" required />
                        
                        <label>Autor do produto:</label>
                        <input name="autor" type="text" value={autor} placeholder="Autor do produto" onChange={this.handleInputChange} className="CP-input" required />
                        
                        <label>Descrição do produto:</label>
                        <textarea name="descricao" placeholder="Descrição do produto" value={descricao} onChange={this.handleInputChange} className="CP-input" required />
                        
                        <label>Imagem do produto:</label>
                        <input type="file" name="imagem" onChange={this.handleFileChange} className="CP-input" required />
                        
                        <input type="submit" value="Cadastrar" className="CP-Cadastro" />
                    </form>
                </main>
            </div>
        );
    }
}

export default CP0;
