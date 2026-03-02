import styles from './index.module.css';
import { Link } from 'react-router-dom';
import PrevIcon from '@/assets/ic_arrow_prev.svg';
import NextIcon from '@/assets/ic_arrow_next.svg';

export default function Pagination() {
  return (
    <div className={styles.paginationWrap}>
      <Link>
        <img src={PrevIcon} alt="" />
      </Link>
      <Link className={styles.active}>1</Link>
      <Link>2</Link>
      <Link>3</Link>
      <Link>4</Link>
      <Link>5</Link>
      <Link>
        <img src={NextIcon} alt="" />
      </Link>
    </div>
  );
}
