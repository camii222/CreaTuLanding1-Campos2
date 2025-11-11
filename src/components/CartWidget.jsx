import { ShoppingCart } from "lucide-react";
import "./CartWidget.css";

export default function CartWidget() {
  return (
    <div className="cart-widget">
      <ShoppingCart size={24} color="silver" />
      <span className="cart-count">2</span>
    </div>
  );
}
