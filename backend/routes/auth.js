const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../config/db');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { nome, sobrenome, username, cpf, email, password, dataNascimento } = req.body;

  if (!nome || !sobrenome || !username || !cpf || !email || !password || !dataNascimento) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
  }

  const checkUserQuery = 'SELECT * FROM usuarios WHERE email = ? OR username = ? OR cpf = ?';
  db.query(checkUserQuery, [email, username, cpf], async (err, results) => {
    if (err) {
      console.error('Erro ao verificar o usuário:', err);
      return res.status(500).json({ message: 'Erro no servidor.' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Usuário já cadastrado com email, username ou CPF fornecido.' });
    }

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const [dia, mes, ano] = dataNascimento.split('/');
      const dataFormatada = `${ano}-${mes}-${dia}`;

      const insertUserQuery = 'INSERT INTO usuarios (nome, sobrenome, username, cpf, email, senha, data_nascimento) VALUES (?, ?, ?, ?, ?, ?, ?)';
      db.query(insertUserQuery, [nome, sobrenome, username, cpf, email, hashedPassword, dataFormatada], (err, result) => {
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

router.post('/login', (req, res) => {
  const { username, password, rememberMe } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
  }

  const findUserQuery = 'SELECT * FROM usuarios WHERE email = ? OR username = ?';
  db.query(findUserQuery, [username, username], async (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuário:', err);
      return res.status(500).json({ message: 'Erro no servidor.' });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: 'Credenciais inválidas.' });
    }

    const user = results[0];

    try {
      const match = await bcrypt.compare(password, user.senha);
      if (!match) {
        return res.status(400).json({ message: 'Credenciais inválidas.' });
      }

      const expiresIn = rememberMe ? '7d' : '1h';
      const token = jwt.sign(
        { id: user.id, email: user.email, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn }
      );

      res.status(200).json({ message: 'Login bem-sucedido!', token, expiresIn });
    } catch (error) {
      console.error('Erro ao verificar a senha:', error);
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  });
});

module.exports = router;
