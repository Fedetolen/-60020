export default function ButtonComponent({ nombre, color }) {
    const misEstilos = {
      backgroundColor: color,
    };
  
    return (
      <>
        <button type="button" className="btn  text-light" style={misEstilos}>
          {nombre}
        </button>
      </>
    );
  }
  