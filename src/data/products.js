export const products = [
  {
    id: 1,
    name: "Auriculares Bluetooth",
    price: 25000,
    category: "electronica",
    img: "/assets/auriculares.png",
    stock: 10,
    description: "Auriculares de alta calidad con cancelación de ruido."
  },
  {
    id: 2,
    name: "Auto de Juguete",
    price: 15000,
    category: "hogar",
    img: "/assets/auto.png",
    stock: 5,
    description: "Auto a control remoto con batería recargable."
  },
  {
    id: 3,
    name: "Campera Negra",
    price: 20000,
    category: "moda",
    img: "/assets/campera.png",
    stock: 8,
    description: "Campera de cuero ecológico, ideal para invierno."
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id === parseInt(id)));
    }, 500);
  });
};
