import styles from './index.module.css';
import BestProducts from '@/components/list/BestProducts';
import AllProducts from '@/components/list/AllProducts';

function List() {
  return (
    <div className={styles.listWrap}>
      <BestProducts />
      <AllProducts />
    </div>
  );
}

export default List;
