import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(id)
      .then((res) => setProduct(res))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p style={{ textAlign: "center" }}>Cargando producto...</p>;

  if (!product) return <p style={{ textAlign: "center" }}>Producto no encontrado 😢</p>;

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  );
}
