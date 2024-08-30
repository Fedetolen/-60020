import { useParams } from 'react-router-dom';
import { getProduct } from '../asyncMock.js';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const prod = getProduct(id);
    setProduct(prod);
  }, [id]);

  return (
    
      <div>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} style={{ width: 300 }} />
        <p>{product.description}</p>
        <p>Precio: {product.price}</p>
      </div>
     
  );
};


export default ItemDetailContainer;
