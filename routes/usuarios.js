// routes/usuarios.js

const express = require('express');
const router = express.Router();

let usuarios = require('../data/usuarios');

// GET /usuarios - obtener todos los usuarios
router.get('/', (req, res) => {
  res.json(usuarios);
});

// GET /usuarios/:id - obtener un usuario por id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  res.json(usuario);
});

// POST /usuarios - crear un nuevo usuario
router.post('/', (req, res) => {
  const { nombre, email, direccion, telefono, fecha_registro } = req.body;

  if (!nombre || !email || !direccion || !telefono || !fecha_registro) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  const nuevoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;

  const nuevoUsuario = {
    id: nuevoId,
    nombre,
    email,
    direccion,
    telefono,
    fecha_registro
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// PUT /usuarios/:id - actualizar un usuario
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuarioIndex = usuarios.findIndex(u => u.id === id);

  if (usuarioIndex === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  const { nombre, email, direccion, telefono, fecha_registro } = req.body;

  if (!nombre || !email || !direccion || !telefono || !fecha_registro) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  const usuarioActualizado = {
    id,
    nombre,
    email,
    direccion,
    telefono,
    fecha_registro
  };

  usuarios[usuarioIndex] = usuarioActualizado;
  res.json(usuarioActualizado);
});

// DELETE /usuarios/:id - eliminar un usuario
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuarioIndex = usuarios.findIndex(u => u.id === id);

  if (usuarioIndex === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  usuarios.splice(usuarioIndex, 1);
  res.json({ message: 'Usuario eliminado correctamente' });
});

module.exports = router;
