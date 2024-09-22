import React, { useContext } from 'react'
import { CartContext } from '../context/CardContext'
import { UserInfo } from './UserInfo'

export const CartView = () => {
    const { carrito, precioTotal , vaciarCarrito} = useContext(CartContext)

    const handleVaciar = () => {
        vaciarCarrito()
    }


    return (
        <div>
            {carrito.map((prod) => (
                <div key={prod.id}> 
                    <h2>{prod.title}</h2>
                    <img src={prod.image} alt={prod.title} style={{ width: 300 }} />
                    <p>Precio: ${prod.price}</p>
                </div>
            ))}
           {carrito.length > 0 && <h2 >Precio Total: ${precioTotal()} </h2>}
            <button onClick={handleVaciar}>Vaciar Carrito</button>
            <UserInfo/>
        </div>
    )
}
