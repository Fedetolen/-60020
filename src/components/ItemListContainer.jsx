import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import { getDocs, getFirestore, collection } from 'firebase/firestore';

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { id } = useParams(); // id = categoría

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "productos");

    // Obtenemos todos los productos
    getDocs(productsCollection).then((snapshot) => {
      const productsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Filtramos por categoría si hay un `id` en la URL
      if (id) {
        setProducts(productsData.filter((product) => product.category === id));
      } else {
        setProducts(productsData);
      }
    });
  }, [id]);

  return (
    <>
      <h2>{greeting || "Productos"}</h2>
      <section style={{ display: 'flex', gap: 10, flexWrap: "wrap" }}>
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
