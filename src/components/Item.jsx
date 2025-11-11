import React from "react";
import "./Item.css";

export default function Item({ product }) {
  return (
    <div className="item">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
    </div>
  );
}
