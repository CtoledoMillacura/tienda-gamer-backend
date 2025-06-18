// routes/productos.js

const express = require('express');
const router = express.Router();

let productos = require('../data/productos');

// GET /productos - obtener todos los productos
router.get('/', (req, res) => {
  res.json(productos);
});

// GET /productos/:id - obtener un producto por id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  res.json(producto);
});

// POST /productos - crear un nuevo producto
router.post('/', (req, res) => {
  const { nombre, categoriaId, marcaId, precio, stock, descripcion, fecha_lanzamiento } = req.body;

  if (!nombre || !categoriaId || !marcaId || !precio || !stock || !descripcion || !fecha_lanzamiento) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  const nuevoId = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;

  const nuevoProducto = {
    id: nuevoId,
    nombre,
    categoriaId,
    marcaId,
    precio,
    stock,
    descripcion,
    fecha_lanzamiento
  };

  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// PUT /productos/:id - actualizar un producto
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productoIndex = productos.findIndex(p => p.id === id);

  if (productoIndex === -1) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  const { nombre, categoriaId, marcaId, precio, stock, descripcion, fecha_lanzamiento } = req.body;

  if (!nombre || !categoriaId || !marcaId || !precio || !stock || !descripcion || !fecha_lanzamiento) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  const productoActualizado = {
    id,
    nombre,
    categoriaId,
    marcaId,
    precio,
    stock,
    descripcion,
    fecha_lanzamiento
  };

  productos[productoIndex] = productoActualizado;
  res.json(productoActualizado);
});

// DELETE /productos/:id - eliminar un producto
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productoIndex = productos.findIndex(p => p.id === id);

  if (productoIndex === -1) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  productos.splice(productoIndex, 1);
  res.json({ message: 'Producto eliminado correctamente' });
});

module.exports = router;
