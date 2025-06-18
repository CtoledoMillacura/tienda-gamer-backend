// routes/marcas.js

const express = require('express');
const router = express.Router();

// Importar datos de marcas
const marcas = require('../data/marcas');

// Obtener todas las marcas
router.get('/', (req, res) => {
  res.json(marcas);
});

// Obtener una marca por id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const marca = marcas.find(m => m.id === id);

  if (!marca) {
    return res.status(404).json({ error: 'Marca no encontrada' });
  }

  res.json(marca);
});

// Crear una nueva marca
router.post('/', (req, res) => {
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }

  const nuevoId = marcas.length > 0 ? marcas[marcas.length - 1].id + 1 : 1;
  const nuevaMarca = { id: nuevoId, nombre };

  marcas.push(nuevaMarca);

  res.status(201).json(nuevaMarca);
});

// Actualizar una marca existente
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre } = req.body;

  const marca = marcas.find(m => m.id === id);

  if (!marca) {
    return res.status(404).json({ error: 'Marca no encontrada' });
  }

  if (!nombre) {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }

  marca.nombre = nombre;

  res.json(marca);
});

// Eliminar una marca
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = marcas.findIndex(m => m.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Marca no encontrada' });
  }

  marcas.splice(index, 1);

  res.json({ mensaje: 'Marca eliminada correctamente' });
});

module.exports = router;
