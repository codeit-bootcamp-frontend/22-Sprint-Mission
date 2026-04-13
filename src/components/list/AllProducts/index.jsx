import { getProducts } from '@/apis/products';
import styles from './index.module.css';
import ProductItem from '@/components/list/ProductItem';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Input from '@/components/Common/Input';
import Dropdown from '@/components/Common/Dropdown';
import { Link } from 'react-router-dom';
import LinkTo from '@/components/Common/LinkTo';
import { useSearchParams } from 'react-router-dom';

const LIST_SORT_TYPE = [
  { label: '최신순', value: 'recent' },
  { label: '좋아요순', value: 'favorite' },
];
function AllProducts() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const orderBy = searchParams.get('orderBy') || 'recent';

  const onChange = (option) => {
    setSearchParams({ orderBy: option.value });
  };
  useEffect(() => {
    async function fetchProducts() {
      try {
        const { list } = await getProducts({
          orderBy: orderBy === 'recent' ? 'recent' : 'favorite',
        });
        setProducts(list ?? []);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }
    fetchProducts();
  }, [orderBy]);

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
            value={orderBy}
            onChange={onChange}
            type="select"
          />
        </div>
      </div>
      <div className={styles.productsWrap}>
        {products.map((item) => {
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
