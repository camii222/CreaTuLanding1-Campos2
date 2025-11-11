import ItemCount from "./ItemCount";
import "./ItemDetail.css";

export default function ItemDetail({ product }) {
  const handleAdd = (quantity) => {
    alert(`Agregaste ${quantity} unidades de ${product.name} al carrito 🛒`);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} className="item-detail-img" />

      <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p className="item-price">${product.price}</p>
        <p className="item-description">{product.description}</p>

        <ItemCount stock={5} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  );
}
