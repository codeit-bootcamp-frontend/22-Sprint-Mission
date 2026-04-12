import { getProducts } from '@/apis/products';
import styles from './index.module.css';
import ProductItem from '@/components/list/ProductItem';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Input from '@/components/Common/Input';
import Dropdown from '@/components/Common/Dropdown';
import { Link } from 'react-router-dom';
import LinkTo from '@/components/Common/LinkTo';

const LIST_SORT_TYPE = [
  { label: '최신순', value: 'latest' },
  { label: '좋아요순', value: 'favorite' },
];
function AllProducts() {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('latest');

  const onChange = (option) => {
    setSortType(option.value);
  };
  useEffect(() => {
    async function fetchProducts() {
      try {
        const { list: initialProduct } = await getProducts();
        setProducts(initialProduct ?? []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }
    fetchProducts();
  }, []);

  // 정렬순하기.. 우선 복사하고
  const sortedProducts = [...products];
  // 정렬 조건
  if (sortType === 'latest') {
    sortedProducts.sort((a, b) => {
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    });
  } else if (sortType === 'favorite') {
    sortedProducts.sort((a, b) => {
      return b.favoriteCount - a.favoriteCount;
    });
  }

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
          <LinkTo className="addItemButcton" to="/additem">
            상품 등록하기
          </LinkTo>
          <Dropdown
            options={LIST_SORT_TYPE}
            value={sortType}
            onChange={onChange}
            type="select"
          />
        </div>
      </div>
      <div className={styles.productsWrap}>
        {sortedProducts.map((item) => {
          return (
            <Link
              className={styles.product}
              key={item.id}
              to={`/items/${item.id}`}
            >
              <ProductItem item={item} />
            </Link>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}
export default AllProducts;
