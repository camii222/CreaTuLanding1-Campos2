const products = [
  {
    id: 1,
    name: "Auriculares Bluetooth",
    price: 25000,
    category: "electronica",
    img: "https://cdn-icons-png.flaticon.com/512/763/763704.png",
    stock: 10,
    description: "Auriculares inalámbricos con cancelación de ruido."
  },
  {
    id: 2,
    name: "Camiseta Negra",
    price: 15000,
    category: "moda",
    img: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
    stock: 15,
    description: "Camiseta de algodón suave, color negro."
  },
  {
    id: 3,
    name: "Lámpara LED de Escritorio",
    price: 20000,
    category: "hogar",
    img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    stock: 8,
    description: "Lámpara moderna de escritorio con luz regulable."
  }
];

// ✅ Exportaciones correctas
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 800);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(p => p.category === categoryId)), 800);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === parseInt(id))), 800);
  });
};
