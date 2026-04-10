'use client';
import { useEffect, useState } from 'react';
import { getProduct } from '@/apis/products';
import styles from './index.module.css';
import Button from '@/components/Common/Button';
import ProfileDefaultImg from '@/assets/ic_user_profile.svg';

import { formatDate } from '@/lib/formatDate.js';
import formatNumber from '@/lib/formatNumber.js';

function ItemsInfo({ id }) {
  const [item, setItem] = useState();

  const handleLikeToggle = () => {
    setItem((prev) => ({
      ...prev,
      isFavorite: !prev.isFavorite,
      favoriteCount: prev.isFavorite
        ? prev.favoriteCount - 1
        : prev.favoriteCount + 1,
    }));
  };
  useEffect(() => {
    async function fetchProduct() {
      const ItemInfo = await getProduct(id);
      setItem(ItemInfo);
    }
    fetchProduct();
  }, []);

  return (
    item && (
      <div className={styles.itemInfoContainer}>
        <div className={styles.itemImgWrap}>
          <img src={item.images[0]} alt={item.name} />
        </div>
        <div className={styles.itemInfoWrap}>
          <p className={styles.title}>{item.name}</p>
          <p className={styles.price}>{formatNumber(item.price)}원</p>
          <div className={styles.introWrap}>
            <p className={styles.label}>상품 소개</p>
            <p className={styles.intro}>{item.description}</p>
          </div>
          <div className={styles.tagWrap}>
            <p className={styles.label}>상품 태그</p>
            {item && (
              <div className={styles.tags}>
                {item.tags.map((tag, index) => (
                  <p className={styles.tag} key={index}>
                    #{tag}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className={styles.sellerAndLike}>
            <div className={styles.sellerWrap}>
              <div className={styles.sellerImg}>
                <img src={ProfileDefaultImg} />
              </div>
              <div className={styles.sellerinfo}>
                <p className={styles.sellerId}>{item.ownerNickname}</p>
                <p className={styles.uploadDate}>
                  {formatDate(item.createdAt)}
                </p>
              </div>
            </div>
            <div className={styles.likeWrap}>
              <Button
                active={item.isFavorite}
                className="likeBtn"
                onClick={handleLikeToggle}
              >
                {item.favoriteCount}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ItemsInfo;
