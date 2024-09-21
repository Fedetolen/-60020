import { Link } from "react-router-dom";
import carrito from "/images/carrito.png"
import { useContext } from "react";
import { CartContext } from "../context/CardContext";
export default function CartWidget() {

  const {cantidadEnCarrito} = useContext(CartContext)
    return (
      <><div className="carrito">
        <Link to="/carrito">
        <img style={{ width: 50 }} src={carrito} alt="carro" />
        <span className="p-2 text-warning">{cantidadEnCarrito}</span>
         </Link>
        </div>
      </>
    );
  }
  