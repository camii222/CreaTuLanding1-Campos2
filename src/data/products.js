export const products = [
  {
    id: 1,
    name: "Auriculares Bluetooth",
    price: 25000,
    image: "https://cdn-icons-png.flaticon.com/512/181/181549.png",
    category: "electrónica",
  },
  {
    id: 2,
    name: "Taza personalizada",
    price: 15000,
    image: "https://cdn-icons-png.flaticon.com/512/744/744465.png",
    category: "hogar",
  },
  {
    id: 3,
    name: "Campera de cuero",
    price: 20000,
    image: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
    category: "moda",
  },
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
