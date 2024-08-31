// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../config/db');
const jwt = require('jsonwebtoken');

// Registro de Usuário
router.post('/register', async (req, res) => {
  const { nome, sobrenome, username, password, dataNascimento } = req.body;

  // Validações básicas
  if (!nome || !sobrenome || !username || !password || !dataNascimento) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
  }

  // Verifica se o email já está cadastrado
  const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(checkEmailQuery, [username], async (err, results) => {
    if (err) {
      console.error('Erro ao verificar o email:', err);
      return res.status(500).json({ message: 'Erro no servidor.' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Email já cadastrado.' });
    }

    // Hash da senha
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Formata a data de nascimento para o formato YYYY-MM-DD
      const [dia, mes, ano] = dataNascimento.split('/');
      const dataFormatada = `${ano}-${mes}-${dia}`;

      // Insere o novo usuário no banco de dados
      const insertUserQuery = 'INSERT INTO usuarios (nome, sobrenome, email, senha, data_nascimento) VALUES (?, ?, ?, ?, ?)';
      db.query(insertUserQuery, [nome, sobrenome, username, hashedPassword, dataFormatada], (err, result) => {
        if (err) {
          console.error('Erro ao registrar usuário:', err);
          return res.status(500).json({ message: 'Erro no servidor.' });
        }

        res.status(201).json({ message: 'Usuário registrado com sucesso!' });
      });
    } catch (error) {
      console.error('Erro ao hash a senha:', error);
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  });
});

// Login de Usuário
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validações básicas
  if (!username || !password) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
  }

  // Busca o usuário pelo email
  const findUserQuery = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(findUserQuery, [username], async (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).json({ message: 'Erro no servidor.' });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    const user = results[0];

    // Verifica a senha
    try {
      const match = await bcrypt.compare(password, user.senha);
      if (!match) {
        return res.status(400).json({ message: 'Credenciais inválidas.' });
      }

      // Geração de Token JWT (Opcional)
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.status(200).json({ message: 'Login bem-sucedido!', token });
    } catch (error) {
      console.error('Erro ao verificar a senha:', error);
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  });
});

module.exports = router;
