import { Link } from 'react-router-dom';

const ProductsCard = ({ title, image, price, idProd }) => {
  return (
    <article style={{ border: '1px solid green', padding: 10 }}>
      <h4>{title}</h4>
      <img src={image} alt={title} style={{ width: 200 }} />
      <p>{price}</p>
      <button>
        <Link to={`/item/${idProd}`}>Ver detalles</Link>
      </button>
    </article>
  );
}

export default ProductsCard;
