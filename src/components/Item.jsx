import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ product }) {
  return (
    <div className="item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`} className="btn">Ver detalle</Link>
    </div>
  );
}
