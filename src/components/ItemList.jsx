export default function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((p) => (
        <div className="item-card" key={p.id}>
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <button>Ver detalle</button>
        </div>
      ))}
    </div>
  );
}
