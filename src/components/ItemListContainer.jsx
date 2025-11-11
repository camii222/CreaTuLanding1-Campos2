import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts().then((res) => {
      if (categoryId) {
        setProducts(res.filter((p) => p.category === categoryId));
      } else {
        setProducts(res);
      }
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando productos...</p>;

  return (
    <div className="catalogo">
      <h2>Catálogo de Productos</h2>
      <ItemList products={products} />
    </div>
  );
}
