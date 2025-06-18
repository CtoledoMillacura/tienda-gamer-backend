// routes/ventas.js

const express = require('express');
const router = express.Router();

let ventas = require('../data/ventas');

// GET /ventas - obtener todas las ventas
router.get('/', (req, res) => {
  res.json(ventas);
});

// GET /ventas/:id - obtener una venta por id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const venta = ventas.find(v => v.id === id);

  if (!venta) {
    return res.status(404).json({ message: 'Venta no encontrada' });
  }

  res.json(venta);
});

// POST /ventas - crear una nueva venta
router.post('/', (req, res) => {
  const { usuarioId, productos, total, fecha } = req.body;

  if (!usuarioId || !productos || !Array.isArray(productos) || productos.length === 0 || !total || !fecha) {
    return res.status(400).json({ message: 'Faltan datos obligatorios o formato incorrecto' });
  }

  const nuevoId = ventas.length > 0 ? ventas[ventas.length - 1].id + 1 : 1;

  const nuevaVenta = {
    id: nuevoId,
    usuarioId,
    productos,
    total,
    fecha
  };

  ventas.push(nuevaVenta);
  res.status(201).json(nuevaVenta);
});

// PUT /ventas/:id - actualizar una venta
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const ventaIndex = ventas.findIndex(v => v.id === id);

  if (ventaIndex === -1) {
    return res.status(404).json({ message: 'Venta no encontrada' });
  }

  const { usuarioId, productos, total, fecha } = req.body;

  if (!usuarioId || !productos || !Array.isArray(productos) || productos.length === 0 || !total || !fecha) {
    return res.status(400).json({ message: 'Faltan datos obligatorios o formato incorrecto' });
  }

  const ventaActualizada = {
    id,
    usuarioId,
    productos,
    total,
    fecha
  };

  ventas[ventaIndex] = ventaActualizada;
  res.json(ventaActualizada);
});

// DELETE /ventas/:id - eliminar una venta
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const ventaIndex = ventas.findIndex(v => v.id === id);

  if (ventaIndex === -1) {
    return res.status(404).json({ message: 'Venta no encontrada' });
  }

  ventas.splice(ventaIndex, 1);
  res.json({ message: 'Venta eliminada correctamente' });
});

module.exports = router;
