import { getProducts } from '../asyncMock.js';
import { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProducts.then((data) => {
      if (id) {
        // Filtrar productos por categoría
        setProducts(data.filter(product => product.category === id));
      } else {
        setProducts(data);
      }
    });
  }, [id]);

  return (
    <>
      <h2>{greeting || "Productos"}</h2>
      <section style={{ display: 'flex', gap: 10 , flexWrap: "wrap"}}>
        {products.map((prod) => (
          <ProductsCard
            key={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
            idProd={prod.id}
          />
        ))}
      </section>
    </>
  );
}
