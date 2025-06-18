// data/ventas.js

const ventas = [
  {
    id: 1,
    usuarioId: 1,
    productos: [
      { productoId: 1, cantidad: 1 },
      { productoId: 5, cantidad: 2 }
    ],
    total: 165000,
    fecha: "2023-06-10"
  },
  {
    id: 2,
    usuarioId: 2,
    productos: [
      { productoId: 3, cantidad: 1 }
    ],
    total: 180000,
    fecha: "2023-06-12"
  },
  {
    id: 3,
    usuarioId: 3,
    productos: [
      { productoId: 2, cantidad: 1 },
      { productoId: 4, cantidad: 1 }
    ],
    total: 165000,
    fecha: "2023-06-15"
  }
];

module.exports = ventas;
