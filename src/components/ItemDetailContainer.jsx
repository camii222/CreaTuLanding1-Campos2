import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id === parseInt(id)));
      }, 1000);
    });

    getProduct.then((res) => setItem(res));
  }, [id]);

  return (
    <div>
      {item ? (
        <>
          <h2>{item.nombre}</h2>
          <p>Categoría: {item.categoria}</p>
          <p>Precio: ${item.precio}</p>
          <button>Agregar al carrito</button>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
