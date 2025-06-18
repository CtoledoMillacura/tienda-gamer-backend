const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Importar rutas
const productosRoutes = require('./routes/productos');
const categoriasRoutes = require('./routes/categorias');
const marcasRoutes = require('./routes/marcas');
const usuariosRoutes = require('./routes/usuarios');
const ventasRoutes = require('./routes/ventas');

// Usar rutas
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/marcas', marcasRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/ventas', ventasRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API de Tienda Gamer funcionando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
