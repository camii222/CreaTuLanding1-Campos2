import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      setFilteredProducts(products.filter(p => p.category === categoryId));
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId]);

  return (
    <div>
      <h2 className="section-title">Catálogo de Productos</h2>
      <ItemList products={filteredProducts} />
    </div>
  );
}
