import React from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';
import { FaEye, FaEyeSlash} from 'react-icons/fa';
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

  isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  isValidPassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return passwordPattern.test(password);
  }

  isValidDate = (date) => {
    const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!datePattern.test(date)) return false;
    const [day, month, year] = date.split('/');
    const parsedDate = new Date(`${year}-${month}-${day}`);
    const currentDate = new Date();
    const minBirthDate = new Date(currentDate.getFullYear() - 120, currentDate.getMonth(), currentDate.getDate());
    return parsedDate instanceof Date && !isNaN(parsedDate) && parsedDate <= currentDate && parsedDate >= minBirthDate;
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { nome, sobrenome, username, cpf, email, password, confirmaPassword, dataNascimento } = this.state;
  
    // Validações
    if (password !== confirmaPassword) {
      this.setState({ errorMessage: 'As senhas não coincidem.' });
      return;
    }
  
    if (!this.isValidPassword(password)) {
      this.setState({ errorMessage: 'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial, e ter no mínimo 8 caracteres.' });
      return;
    }
  
    if (!this.isValidEmail(email)) {
      this.setState({ errorMessage: 'Por favor, insira um e-mail válido.' });
      return;
    }
  
    if (!this.isValidDate(dataNascimento)) {
      this.setState({ errorMessage: 'Por favor, insira uma data de nascimento válida.' });
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
        dataNascimento
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
          <h2 className='titulo-cadastro'>REALIZE O SEU CADASTRO!</h2>
        </div>
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
        <label for="nome">Apelido:</label>
        <input 
          type="text" 
          id="sobrenome" 
          name="sobrenome" 
          placeholder="Insira seu apelido, será assim que irão te ver no site..." 
          required 
          value={this.state.sobrenome} 
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
          className={`form-item ${validationErrors.sobrenome ? 'error' : ''}`}
        />
        {validationErrors.sobrenome && <div className="error-message">{validationErrors.sobrenome}</div>}
        <br />
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
        <br/>
        {this.state.errorMessage && <div className="error-message">{this.state.errorMessage}</div>}
        {this.state.successMessage && <div className="success-message">{this.state.successMessage}</div>}
        <br />
        <input className='form-submit-cadastro' type="submit" value="Cadastrar" />
      </form>
    );
  }
}

export default Cadastro;
