// data/productos.js

const productos = [
  {
    id: 1,
    nombre: "Teclado Mecánico RGB",
    categoriaId: 1,           // Referencia a categoría (ej: Periféricos)
    marcaId: 1,               // Referencia a marca (ej: GamerTech)
    precio: 65000,
    stock: 12,
    descripcion: "Teclado mecánico con iluminación RGB personalizable y switches mecánicos.",
    fecha_lanzamiento: "2023-05-10"
  },
  {
    id: 2,
    nombre: "Mouse Gaming Ergonómico",
    categoriaId: 1,
    marcaId: 2,
    precio: 45000,
    stock: 30,
    descripcion: "Mouse con sensor de alta precisión y diseño ergonómico.",
    fecha_lanzamiento: "2022-11-20"
  },
  {
    id: 3,
    nombre: "Monitor 144Hz 24 pulgadas",
    categoriaId: 2,
    marcaId: 3,
    precio: 180000,
    stock: 7,
    descripcion: "Monitor Full HD con tasa de refresco de 144Hz y tiempo de respuesta de 1ms.",
    fecha_lanzamiento: "2023-01-15"
  },
  {
    id: 4,
    nombre: "Silla Gamer Ergonómica",
    categoriaId: 3,
    marcaId: 4,
    precio: 120000,
    stock: 5,
    descripcion: "Silla gamer con soporte lumbar y reposabrazos ajustables.",
    fecha_lanzamiento: "2023-03-30"
  },
  {
    id: 5,
    nombre: "Auriculares Gaming con Micrófono",
    categoriaId: 1,
    marcaId: 1,
    precio: 55000,
    stock: 20,
    descripcion: "Auriculares con sonido envolvente 7.1 y micrófono ajustable.",
    fecha_lanzamiento: "2022-12-05"
  },
  {
    id: 6,
    nombre: "Juego AAA - Aventura Épica",
    categoriaId: 4,
    marcaId: 5,
    precio: 40000,
    stock: 50,
    descripcion: "Juego de aventura para PC con gráficos ultra realistas.",
    fecha_lanzamiento: "2023-06-01"
  }
];

module.exports = productos;
