const express = require('express');
const router = express.Router();
const db = require('../config/db');
const multer = require('multer');
const path = require('path');

// Configuração do multer para salvar as imagens
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nomeia a imagem com um timestamp
    }
});

const upload = multer({ storage });

router.post('/cp0', upload.single('imagem'), async (req, res) => {
    const { nome, preco, quantidade, autor, descricao } = req.body;
    const imagem_url = req.file ? `/uploads/${req.file.filename}` : null;

    if (!nome || !preco || !quantidade || !autor || !descricao || !imagem_url) {
        return res.status(400).json({ message: 'Todos os campos precisam ser preenchidos' });
    }

    const insertprodutosquery = "INSERT INTO produtos (nome, preco, quantidade, autor, descricao, imagem_url) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(insertprodutosquery, [nome, preco, quantidade, autor, descricao, imagem_url], (err, result) => {
        if (err) {
            console.error('Erro ao registrar produto:', err);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
        res.status(201).json({ message: 'Produto registrado com sucesso!' });
    });
});

router.get('/loja', (req, res) => {
    const selectProdutosQuery = "SELECT * FROM produtos";
    db.query(selectProdutosQuery, (err, results) => {
        if (err) {
            console.error('Erro ao buscar produtos:', err);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
        res.status(200).json(results);
    });
});
router.get('/EditRemov', (req, res) => {
    const selectProdutosQuery = "SELECT * FROM produtos";
    db.query(selectProdutosQuery, (err, results) => {
        if (err) {
            console.error('Erro ao buscar produtos:', err);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
        res.status(200).json(results);
    });
});

router.delete('/deletar/:id', (req, res) => {
    const { id } = req.params;
    const deleteQuery = "DELETE FROM produtos WHERE id_produto = ?";
    db.query(deleteQuery, [id], (err, result) => {
        if (err) {
            console.error('Erro ao deletar produto:', err);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }
        res.status(200).json({ message: 'Produto deletado com sucesso.' });
    });
});

router.put('/EditRemov/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco, quantidade, autor, descricao } = req.body;

    const updateQuery = "UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, autor = ?, descricao = ? WHERE id_produto = ?";
    db.query(updateQuery, [nome, preco, quantidade, autor, descricao, id], (err, result) => {
        if (err) {
            console.error('Erro ao atualizar produto:', err);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }
        res.status(200).json({ message: 'Produto atualizado com sucesso!' });
    });
});

router.get('/Lucci/:id', (req, res) => {
    const { id } = req.params;
    console.log('ID recebido na requisição:', id);  // Log do ID recebido
    
    const selectProdutoQuery = "SELECT * FROM produtos WHERE id_produto = ?";

    db.query(selectProdutoQuery, [id], (err, result) => {
        if (err) {
            console.error('Erro ao buscar produto no banco de dados:', err);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
        
        console.log('Resultado da busca no banco de dados:', result);  // Log do resultado da query
        
        if (result.length === 0) {
            console.log('Produto não encontrado para o ID:', id);
            return res.status(404).json({ message: 'Produto não encontrado.' });
        }

        console.log('Produto encontrado:', result[0]);
        res.status(200).json(result[0]);
    });
});

module.exports = router;
