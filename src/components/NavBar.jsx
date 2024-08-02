import './NavBar.css';
import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';
import tienda2 from "/images/tienda2.jpg"

export default function NavBar() {
  return (
    <>
      <nav className="navbar d-flex">
        <img
          style={{ width: 90 }}
          src={tienda2}
          alt="logo de Tienda Fullstack"
        />
        <div className="categorias">
        <ButtonComponent nombre="Remeras" color="#6E839C" />
        <ButtonComponent nombre="Gorros" color="#6E839C" />
        <ButtonComponent nombre="Tazas" color="#6E839C" />
        </div>
        <CartWidget />
      </nav>
    </>
  );
}
