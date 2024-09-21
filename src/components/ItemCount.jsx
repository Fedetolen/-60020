import { useContext, useState } from "react";
import { CartContext } from "../context/CardContext";
export const ItemCount = ({ product }) => {
  const { carrito, setCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };
  const handleSumar = () => {
    cantidad < product.stock && setCantidad(cantidad + 1);
  };

  const handleAgregar = () => {

    const nuevoCarrito = [...carrito]
    const itemAgregado = { ...product, cantidad };
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id)
    if (estaEnElCarrito){
        estaEnElCarrito.cantidad = estaEnElCarrito.cantidad + cantidad
      console.log("Esta en el carrito");
        setCarrito(nuevoCarrito)}
    else {
        setCarrito([...carrito, itemAgregado]);
    }
  

  
};


return (
  <>
    <div>
      <button onClick={handleRestar}>-</button>
      <p>{cantidad}</p>
      <button onClick={handleSumar}>+</button>
    </div>
    <button onClick={handleAgregar}>Agregar al carrito</button>
  </>
);}
