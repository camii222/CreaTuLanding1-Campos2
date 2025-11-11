import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  return (
    <div>
      {product ? <ItemDetail product={product} /> : <p>Cargando...</p>}
    </div>
  );
}
