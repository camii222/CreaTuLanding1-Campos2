import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";


export default function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">CreaTuLanding</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/electrónica">Electrónica</Link></li>
        <li><Link to="/category/hogar">Hogar</Link></li>
        <li><Link to="/category/moda">Moda</Link></li>
      </ul>
      <CartWidget /> 
    </nav>
  );
}
