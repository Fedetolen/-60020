import { createContext, useState } from 'react';

// Creamos el contexto
export const CartContext = createContext();

// Creamos el provider del contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Puedes agregar aquí las funciones que gestionan el carrito
  const agregarProducto = (producto, cantidad) => {
    // lógica para agregar el producto al carrito
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad,0)
}

  return (
    <CartContext.Provider value={{ carrito, setCarrito, agregarProducto, vaciarCarrito, cantidadEnCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
