import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { ItemCount } from './ItemCount';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "productos", id);

    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
      setLoading(false); 
    });
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: 300 }} />
      <p>{product.description}</p>
      <p>Stock: {product.stock}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount product={product}/>
    </div>
  );
};

export default ItemDetailContainer;
