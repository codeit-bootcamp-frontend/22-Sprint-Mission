import { getProducts } from '@/apis/products';
import styles from './index.module.css';
import ProductItem from '@/components/list/ProductItem';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Input from '@/components/Common/Input';
import Dropdown from '@/components/Common/Dropdown';
import { Link } from 'react-router-dom';
import LinkTo from '@/components/Common/LinkTo';

const LIST_SORT_TYPE = ['최신순', '좋아요순'];

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState('최신순');

  const onChange = (selectedValue) => {
    setSortType(selectedValue);
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
  if (sortType === '최신순') {
    // 복사한 배열에 sort((조건 a,b)=>{return 값으로 ... })
    sortedProducts.sort((a, b) => {
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      // 문자열 데이터를 Date로 Data객체로 변환됨.
    });
  } else if (sortType === '좋아요순') {
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
          />
        </div>
      </div>
      <div className={styles.productsWrap}>
        {sortedProducts.map((item) => {
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
export default AllProducts;
