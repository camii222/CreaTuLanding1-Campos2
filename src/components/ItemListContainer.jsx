import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      if (categoryId) {
        setProducts(res.filter(p => p.category === categoryId));
      } else {
        setProducts(res);
      }
    });
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Catálogo de Productos"}</h2>
      <ItemList products={products} />
    </div>
  );
}
