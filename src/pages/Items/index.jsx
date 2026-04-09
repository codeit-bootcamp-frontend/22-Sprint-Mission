import styles from './index.module.css';
import { useParams } from 'react-router-dom';
import ItemsInfo from '@/components/Items/ItemsInfo';
import Comments from '@/components/Items/Comments';

function Items() {
  const { id } = useParams();

  return (
    <div className={styles.itemWrap}>
      <ItemsInfo id={id} />
      <Comments id={id} />
    </div>
  );
}

export default Items;
