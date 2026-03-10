import styles from './index.module.css';
import cn from 'classnames';
import Input from '@/components/Common/Input';
import Button from '@/components/Common/Button';
import Textarea from '@/components/Common/Textarea';
import AddImgIcon from '@/assets/ic_plus.svg';
import ProductTags from '@/components/ProductTags';
import { useState, useRef } from 'react';
import DelTagImg from '@/assets/ic_X.svg';

function addItem() {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  function handleImageUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
  }
  return (
    <div className={cn(styles.pageWrap, styles.addItemPage)}>
      <div className={styles.addItemTop}>
        <h2>상품 등록하기</h2>
        <Button type="button" className="primary btnS btnAddItem">
          등록
        </Button>
      </div>
      <form>
        <div>
          <p className={styles.label}>상품 이미지</p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />

          {!imagePreview && (
            <Button
              type="button"
              className="btnAddImg"
              onClick={() => fileInputRef.current.click()}
            >
              <img src={AddImgIcon} />
              이미지 등록
            </Button>
          )}
          {imagePreview && (
            <div className={styles.ImgWrap}>
              <img src={imagePreview} className={styles.previewImg} />
              <Button
                type="button"
                className="btnImgDel"
                onClick={() => setImagePreview(null)}
              >
                <img src={DelTagImg} alt="" />
              </Button>
            </div>
          )}
        </div>
        <div>
          <label className={styles.label} htmlFor="productName">
            상품명
          </label>
          <Input
            type="text"
            id="productName"
            className={styles.inputName}
            placeholder="상품명을 입력해주세요."
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="productIntro">
            상품 소개
          </label>
          <Textarea
            id="productIntro"
            className="productIntro"
            placeholder="상품 소개를 입력해주세요."
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="productPrice">
            판매가격
          </label>
          <Input
            type="number"
            id="productPrice"
            className={styles.inputPrice}
            placeholder="판매 가격을 입력해주세요."
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="productTag">
            태그
          </label>
          <ProductTags id="productTag" />
        </div>
      </form>
    </div>
  );
}

export default addItem;
