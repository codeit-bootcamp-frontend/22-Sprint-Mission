import styles from './index.module.css';
import { useParams } from 'react-router-dom';
import ItemsInfo from '@/components/Items/ItemsInfo';
import Comments from '@/components/Items/Comments';
import LinkTo from '@/components/Common/LinkTo';
import IconBack from '@/assets/ic_back.svg';

function Items() {
  const { id } = useParams();

  return (
    <div className={styles.itemWrap}>
      <ItemsInfo id={id} />
      <Comments id={id} />
      <div className={styles.btnWrap}>
        <LinkTo to="/items" className="goListButton">
          목록으로 돌아가기 <img src={IconBack} />
        </LinkTo>
      </div>
    </div>
  );
}

export default Items;
