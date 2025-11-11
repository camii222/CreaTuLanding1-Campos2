import "./Item.css";

export default function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.name} className="item-image" />
      <div className="item-info">
        <h3>{product.name}</h3>
        <p className="price">${product.price}</p>
        <button>Ver detalle</button>
      </div>
    </div>
  );
}
