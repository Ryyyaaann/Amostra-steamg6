import React from "react";
import axios from "axios";

class CP0 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            preco: "",
            quantidade: "",
            autor: "",
            descricao: "",
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        const { nome, preco, quantidade, autor, descricao } = this.state;
        try {
            const response = await axios.post('http://localhost:5000/api/produtos/cp0', {
                nome,
                preco,
                quantidade,
                autor,
                descricao
            });
            console.log(response);
            this.setState({
                nome: "",
                preco: "",
                quantidade: "",
                autor: "",
                descricao: "",
            });
        } catch (error) {
            console.log("Erro ao cadastrar produto", error);
        }
    };

    render() {
        const { nome, preco, quantidade, autor, descricao } = this.state;

        return (
            <div className="Cadastro-P">
                <main className="CP-Main">
                    <h1>Cadastro produto</h1>
                    <form onSubmit={this.handleSubmit} >
                        <label>Nome do produto:</label>
                        <input
                            id="nome"
                            name="nome"
                            value={nome}
                            type="text"
                            placeholder="Nome do produto"
                            onChange={this.handleInputChange}
                            required
                        />
                        <label>Preço do produto:</label>
                        <input
                            name="preco"
                            type="number"
                            value={preco}
                            placeholder="Preço do produto"
                            onChange={this.handleInputChange}
                            required
                        />
                        <label>Quantidade do produto:</label>
                        <input
                            name="quantidade"
                            type="number"
                            value={quantidade}
                            placeholder="Quantidade do produto"
                            onChange={this.handleInputChange}
                            required
                        />
                        <label>Autor do produto:</label>
                        <input
                            name="autor"
                            type="text"
                            value={autor}
                            placeholder="Autor do produto"
                            onChange={this.handleInputChange}
                            required
                        />
                        <label>Descrição do produto:</label>
                        <textarea
                            name="descricao"
                            placeholder="Descrição do produto"
                            value={descricao}
                            onChange={this.handleInputChange}
                            required
                        />
                        <input type="submit" value="Cadastrar" />
                    </form>
                </main>
            </div>
        );
    }
}

export default CP0;
