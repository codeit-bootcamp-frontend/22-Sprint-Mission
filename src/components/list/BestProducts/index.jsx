import { getProducts } from '@/apis/products';
import styles from './index.module.css';
import ProductItem from '@/components/list/ProductItem';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BestProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { list: likeProducts } = await getProducts();
        const likeArr = [...likeProducts];
        const sorted = likeArr.sort((a, b) => {
          return b.favoriteCount - a.favoriteCount;
        });
        const top4 = sorted.slice(0, 4);
        setProducts(top4 ?? []);
      } catch (error) {
        console.error('Failed to fetch recipients:', error);
      }
    }
    fetchProducts();
  }, []);

  const { id, images, description, name, price, favoriteCount, tags } =
    products;

  return (
    <div className={styles.bestProduct}>
      <h2>베스트 상품</h2>
      <div className={styles.productsWrap}>
        {products.map((item) => {
          return (
            <Link className={styles.product} key={item.id} to={`/${item.id}`}>
              <ProductItem item={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default BestProduct;
