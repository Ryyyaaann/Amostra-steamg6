import React from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/cadastro.css';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      username: '',
      cpf: '',
      email: '',
      password: '',
      confirmaPassword: '',
      dataNascimento: '',
      estiloArte: '',
      biografia: '',
      errorMessage: '',
      successMessage: '',
      showPassword: false,
      validationErrors: {}
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
      errorMessage: '',
      successMessage: '',
      validationErrors: {
        ...this.state.validationErrors,
        [name]: ''
      }
    });
  }

  togglePasswordVisibility = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  }

  handleBlur = (event) => {
    const { name, value } = event.target;

    if (!value) {
      this.setState(prevState => ({
        validationErrors: {
          ...prevState.validationErrors,
          [name]: 'Esse campo é obrigatório.'
        }
      }));
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { nome, sobrenome, username, cpf, email, password, confirmaPassword, dataNascimento, estiloArte, biografia } = this.state;

    if (password !== confirmaPassword) {
      this.setState({ errorMessage: 'As senhas não coincidem.' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        nome,
        sobrenome,
        username,
        cpf,
        email,
        password,
        dataNascimento,
        estiloArte,
        biografia
      });

      this.setState({
        nome: '',
        sobrenome: '',
        username: '',
        cpf: '',
        email: '',
        password: '',
        confirmaPassword: '',
        dataNascimento: '',
        estiloArte: '',
        biografia: '',
        errorMessage: '',
        successMessage: response.data.message
      });
    } catch (error) {
      if (error.response && error.response.data) {
        this.setState({ errorMessage: error.response.data.message });
      } else {
        this.setState({ errorMessage: 'Erro ao processar o cadastro. Por favor, tente novamente.' });
      }
    }
  }

  render() {
    const { showPassword, validationErrors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className='form-cadastro'>
        <div className='realizecadastro'>
          <img src={require('../assets/Group 49.png')} className='fundo-cadastro' alt="Cadastre-se" width={400} />
          <img src={require('../assets/Group 50.png')} className='fundo-forms' alt="fundo-geometrico" width={1000} />
        </div>
        <div className='itens-form'>
          <div className='input-container'>
            <label for="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Insira seu nome"
              required
              value={this.state.nome}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              className={`form-item ${validationErrors.nome ? 'error' : ''}`}
            />
            {validationErrors.nome && <div className="error-message">{validationErrors.nome}</div>}
            <br />
          </div>
          <div className='input-container'>
            <label for="nome">Apelido:</label>
            <input
              type="text"
              id="sobrenome"
              name="sobrenome"
              placeholder="Insira seu apelido"
              required
              value={this.state.sobrenome}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              className={`form-item ${validationErrors.sobrenome ? 'error' : ''}`}
            />
            {validationErrors.sobrenome && <div className="error-message">{validationErrors.sobrenome}</div>}
            <br />
          </div>
          <div className='input-container'>
            <label for="nome">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required
              value={this.state.email}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              className={`form-item ${validationErrors.email ? 'error' : ''}`}
            />
            {validationErrors.email && <div className="error-message">{validationErrors.email}</div>}
            <br />
          </div>
          <div className='input-container'>
            <label for="nome">Nome de Usuário:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              value={this.state.username}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              className={`form-item ${validationErrors.username ? 'error' : ''}`}
            />
            {validationErrors.username && <div className="error-message">{validationErrors.username}</div>}
            <br />
          </div>
          <div className='input-container'>
            <label for="nome">CPF:</label>
            <InputMask
              mask="999.999.999-99"
              id="cpf"
              name="cpf"
              placeholder="CPF"
              required
              value={this.state.cpf}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              className={`form-item ${validationErrors.cpf ? 'error' : ''}`}
            />
            {validationErrors.cpf && <div className="error-message">{validationErrors.cpf}</div>}
            <br />
          </div>
          <div className='input-container'>
            <label htmlFor="estiloArte">Estilo de Arte:</label>
            <select
              id="estiloArte"
              name="estiloArte"
              required
              value={this.state.estiloArte}
              onChange={this.handleInputChange}
              className={`form-item-s ${validationErrors.estiloArte ? 'error' : ''}`}
            >
              <option className = "Tipo_arte"value="" disabled>Selecione seu estilo de arte</option>
              <option value="Outros">Artistas Negras</option>
              <option value="Outros">LGBTQIAPN+</option>
              <option value="Outros">Modelagem 3D</option>
              <option value="Outros">Modelagem 2D</option>
              <option value="Outros">Arte Realista</option>
              <option value="Outros">Animação</option>
            </select>
            {validationErrors.estiloArte && <div className="error-message">{validationErrors.estiloArte}</div>}
            <br />
          </div>
          <div className='input-container'>
            <label for="nome">Senha:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Senha"
              required
              value={this.state.password}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              className={`form-item ${validationErrors.password ? 'error' : ''}`}
            />
            <span className="password-toggle2" onClick={this.togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {validationErrors.password && <div className="error-message">{validationErrors.password}</div>}
            <br />
          </div>
          <div className='input-container'>

            <label for="nome">Confirme sua Senha:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmaPassword"
              name="confirmaPassword"
              placeholder="Confirme a Senha"
              required
              value={this.state.confirmaPassword}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              className={`form-item ${validationErrors.confirmaPassword ? 'error' : ''}`}
            />
            {validationErrors.confirmaPassword && <div className="error-message">{validationErrors.confirmaPassword}</div>}
            <br />
          </div>
          <div className='input-container'>
            <label for="nome">Data de Nascimento:</label>
            <InputMask
              mask="99/99/9999"
              id="dataNascimento"
              name="dataNascimento"
              placeholder="Data de Nascimento (DD/MM/AAAA)"
              required
              value={this.state.dataNascimento}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              className={`form-item ${validationErrors.dataNascimento ? 'error' : ''}`}
            />
            {validationErrors.dataNascimento && <div className="error-message">{validationErrors.dataNascimento}</div>}
            <br />
            {this.state.errorMessage && <div className="error-message">{this.state.errorMessage}</div>}
            {this.state.successMessage && <div className="success-message">{this.state.successMessage}</div>}
            <br />

          <div className='input-container'>
            <label for='nome'>Biografia</label>
            <textarea
              id='biografia'
              name='biografia'
              placeholder='Insira sua biografia'
              required
              value={this.state.biografia}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              className={`form-item-b ${validationErrors.biografia? 'error' : ''}`}
              />
          </div>
            <input className='form-submit-cadastro' type="submit" value="Cadastrar" />
          </div>
        </div>
      </form>
    );
  }
}

export default Cadastro;