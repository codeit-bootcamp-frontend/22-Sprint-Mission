import { getProducts } from '@/apis/products';
import styles from './index.module.css';
import ProductItem from '@/components/list/ProductItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import Input from '@/components/Common/Input';
import Button from '@/components/Common/Button';
import Dropdown from '@/components/Common/Dropdown';

const LIST_SORT_TYPE = ['최신순', '좋아요순'];

function BestProduct({ item }) {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('최신순');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { list: initialProduct } = await getProducts();
        setProducts(initialProduct ?? []);
      } catch (error) {
        console.error('Failed to fetch recipients:', error);
      }
    }
    fetchProducts();
  }, []);

  const { id, images, description, name, price, favoriteCount, tags } =
    products;

  return (
    <div className={styles.allProduct}>
      <div className={styles.productListTop}>
        <h2>전체 상품</h2>
        <div className={styles.listOptions}>
          <Input
            type="text"
            id="searchInput"
            className={styles.inputSearch}
            placeholder="검색할 상품을 입력해주세요"
          />
          <Button className="primary btnM">상품 등록하기</Button>
          <Dropdown options={LIST_SORT_TYPE} value={sortType} />
        </div>
      </div>
      <div className={styles.productsWrap}>
        {products.map((item) => {
          return (
            <Link className={styles.product} key={item.id} to={`/${item.id}`}>
              <ProductItem item={item} />
            </Link>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}
export default BestProduct;
