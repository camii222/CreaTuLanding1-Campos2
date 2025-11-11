export const products = [
  { id: 1, name: "Auriculares Bluetooth", price: 25000, category: "electronica", image: "https://cdn-icons-png.flaticon.com/512/181/181549.png" },
  { id: 2, name: "Taza personalizada", price: 15000, category: "hogar", image: "https://cdn-icons-png.flaticon.com/512/744/744465.png" },
  { id: 3, name: "Campera de cuero", price: 20000, category: "moda", image: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};
