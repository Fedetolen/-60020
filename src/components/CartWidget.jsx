import carrito from "/images/carrito.png"

export default function CartWidget() {
    return (
      <><div className="carrito">
        <img style={{ width: 50 }} src={carrito} alt="carro" />
        <span className="p-2 text-warning">2</span>
        </div>
      </>
    );
  }
  