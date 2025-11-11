export default function ItemDetail({ product }) {
  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button className="btn">Agregar al carrito</button>
      </div>
    </div>
  );
}
