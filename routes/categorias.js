// routes/categorias.js

const express = require('express');
const router = express.Router();

const categorias = require('../data/categorias');

// GET /categorias - lista todas las categorías
router.get('/', (req, res) => {
  res.json(categorias);
});

// GET /categorias/:id - obtiene una categoría por id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const categoria = categorias.find(cat => cat.id === id);

  if (!categoria) {
    return res.status(404).json({ message: 'Categoría no encontrada' });
  }

  res.json(categoria);
});

module.exports = router;
