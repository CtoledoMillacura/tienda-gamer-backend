// index.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Importar routers
const productosRouter = require('./routes/productos');
const categoriasRouter = require('./routes/categorias');
const marcasRouter = require('./routes/marcas');
const usuariosRouter = require('./routes/usuarios');
const ventasRouter = require('./routes/ventas');

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/productos', productosRouter);
app.use('/api/categorias', categoriasRouter);
app.use('/api/marcas', marcasRouter);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/ventas', ventasRouter);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API REST Tienda Gamer funcionando correctamente');
});

// Arrancar servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
