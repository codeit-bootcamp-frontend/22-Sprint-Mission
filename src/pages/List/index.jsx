import { getProducts } from '@/apis/products';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import BestProduct from '@/components/list/BestProducts';
import AllProducts from '@/components/list/AllProducts';

function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getProducts();
        setProducts(res?.list ?? []);
      } catch (error) {
        console.error('Failed to fetch recipients:', error);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div className={styles.listWrap}>
      <BestProduct />
      <AllProducts />
    </div>
  );
}

export default List;
