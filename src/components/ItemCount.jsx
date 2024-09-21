import { useState } from "react"

export const ItemCount = ({product}) => {

    const [cantidad,setCantidad] = useState(1)

    const handleRestar =() => {
        cantidad > 1 && setCantidad(cantidad - 1)

    }
    const handleSumar = () => {
        cantidad < product.stock && setCantidad(cantidad + 1)
    }

    const handleAgregar = () => {
        console.log({...product, cantidad})
    }
  return (
    <>
        <div>
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button onClick={handleAgregar}>Agregar al carrito</button>
    </>
  )
}
