import styles from './index.module.css';
import likeIcon from '@/assets/ic_heart.svg';
import formatNumber from '@/lib/formatNumber.js';

function ProductItem({ item }) {
  if (!item) {
    return null;
  }
  const { id, images, description, name, price, favoriteCount, tags } = item;
  return (
    <div className={styles.item} key={id}>
      <div className={styles.imageWrap}>
        <img src={images[0]} alt={description} />
      </div>
      <div className={styles.infoWrap}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{formatNumber(price)}원</div>
        <div className={styles.likeCount}>
          <img src={likeIcon} alt="like icon" />
          {favoriteCount}
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
