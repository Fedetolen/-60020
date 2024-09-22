import React, { useState } from "react";

export const UserInfo = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

    const handleSubmit = ({carrito,createNewOrder}) => {
        const order = {
            buyer: {
                nombre,
                apellido,
                email,
                telefono
            },
            items:carrito
        }

        createNewOrder(order)
    }

  return (
    <div>
      <h1>UserInfo</h1>
      <div>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </div>
      <div>
        <button onClick={handleSubmit}>Finalizar Compra</button>
      </div>
    </div>
  );
};
