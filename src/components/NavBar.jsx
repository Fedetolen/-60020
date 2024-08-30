import "./NavBar.css";
import ButtonComponent from "./ButtonComponent";
import CartWidget from "./CartWidget";
import tienda2 from "/images/tienda2.jpg";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar d-flex">
      <Link to="/">
        <img style={{ width: 90 }} src={tienda2} alt="logo de Tienda Fullstack" />
      </Link>
      <div className="categorias">
        <Link to="/category/remeras"><ButtonComponent nombre="Remeras" color="#6E839C" /></Link>
        <Link to="/category/gorros"><ButtonComponent nombre="Gorros" color="#6E839C" /></Link>
        <Link to="/category/tazas"><ButtonComponent nombre="Tazas" color="#6E839C" /></Link>
      </div>
      <CartWidget />
    </nav>
  );
}
