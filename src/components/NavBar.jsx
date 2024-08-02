import './NavBar.css';
import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <>
      <nav className="navbar d-flex">
        <img
          style={{ width: 90 }}
          src="/images/tienda2.jpg"
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
