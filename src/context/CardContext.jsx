import { createContext, useState } from 'react';
import { getFirestore, collection, addDoc, doc, updateDoc } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [orderId, setOrderId] = useState("");

  const agregarProducto = (producto, cantidad) => {
   
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  };

  const createNewOrder = (order) => {
    const db = getFirestore();
    const orders = collection(db, "orders");

    addDoc(orders, order).then((snapshot) => {
      setOrderId(snapshot.id);

      const getDoc = doc(db,"orders",snapshot.id)
      updateDoc(getDoc,{orderId:snapshot.id})

      alert("Tu orden de compra es: " + snapshot.id)
    });
  };

  return (
    <CartContext.Provider value={{ carrito, setCarrito, agregarProducto, vaciarCarrito, cantidadEnCarrito, precioTotal, createNewOrder }}>
      {children}
    </CartContext.Provider>
  );
};
