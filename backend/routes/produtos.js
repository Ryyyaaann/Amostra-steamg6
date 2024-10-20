const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/cp0', async (req, res) => {
    const {nome, preco, quantidade, autor, descricao} = req.body;
    if (!nome || !preco || !quantidade || !autor || !descricao) {
        return res.status(400).json({message: 'Todos os campos precisam ser preenchidos'});
    }
    const insertprodutosquery = "INSERT INTO produtos (nome, preco, quantidade, autor, descricao) VALUES (?, ?, ?, ?, ?)";
    db.query(insertprodutosquery, [nome, preco, quantidade, autor, descricao], (err, result) =>{
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

router.delete('/loja/:id', (req, res) => {
    const { id } = req.params;
    const deleteProdutoQuery = "DELETE FROM produtos WHERE id_produto = ?";
    db.query(deleteProdutoQuery, [id], (err, result) => {
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

router.put('/loja/:id', (req, res) => {
    const { id } = req.params;
    const { nome, preco, quantidade, autor, descricao } = req.body;
    if (!nome || !preco || !quantidade || !autor || !descricao) {
        return res.status(400).json({ message: 'Todos os campos precisam ser preenchidos' });
    }
    const updateProdutoQuery = "UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, autor = ?, descricao = ? WHERE id_produto = ?";
    db.query(updateProdutoQuery, [nome, preco, quantidade, autor, descricao, id], (err, result) => {
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

module.exports = router;
