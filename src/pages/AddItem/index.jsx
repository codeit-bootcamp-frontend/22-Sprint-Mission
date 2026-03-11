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

  const [isNameValid, setIsNameValid] = useState(false);
  const [isIntroValid, setIsIntroValid] = useState(false);
  const [isPriceValid, setIsPriceValid] = useState(false);
  const [isTagValid, setIsTagValid] = useState(false);
  const [tags, setTags] = useState([]);

  const [nameMessage, setNameMessage] = useState('');
  const [introMessage, setIntroMessage] = useState('');
  const [priceMessage, setPriceMessage] = useState('');
  const [tagMessage, setTagMessage] = useState('');

  function handleImageUpload(e) {
    const file = e.target.files[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
  }
  const handleNameBlur = (e) => {
    setTouched((prev) => ({ ...prev, name: true }));
    const v = e.target.value;
    if (!v) {
      setIsNameValid(false);
      setNameMessage('상품명을 입력해주세요.');
      return;
    }
    setIsNameValid(true);
    setNameMessage('');
  };
  const handleIntroBlur = (e) => {
    setTouched((prev) => ({ ...prev, intro: true }));
    const v = e.target.value;
    if (!v) {
      setIsIntroValid(false);
      setIntroMessage('상품 소개를 입력해주세요.');
      return;
    }
    setIsIntroValid(true);
    setIntroMessage('');
  };
  const handlePriceBlur = (e) => {
    setTouched((prev) => ({ ...prev, price: true }));
    const v = e.target.value;
    if (!v) {
      setIsPriceValid(false);
      setPriceMessage('판매 가격이 입력되지 않았습니다.');
      return;
    }
    setIsPriceValid(true);
    setPriceMessage('');
  };
  const handleTagBlur = (e) => {
    setTouched((prev) => ({ ...prev, tag: true }));
    if (tags.length === 0) {
      setIsTagValid(false);
      setTagMessage('태그는 최소 1개 등록해주세요.');
    } else {
      setIsTagValid(true);
      setTagMessage('');
    }
  };

  const [touched, setTouched] = useState({
    name: false,
    intro: false,
    price: false,
    tag: false,
  });
  const isFormValid = isNameValid && isIntroValid && isPriceValid && isTagValid;

  return (
    <div className={cn(styles.pageWrap, styles.addItemPage)}>
      <div className={styles.addItemTop}>
        <h2>상품 등록하기</h2>
        <Button
          type="button"
          className="primary btnS btnAddItem"
          active={true}
          disabled={!isFormValid}
        >
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
            onBlur={handleNameBlur}
            error={touched.name && !isNameValid}
          />
          {nameMessage && <p className={styles.alert}>{nameMessage}</p>}
        </div>
        <div>
          <label className={styles.label} htmlFor="productIntro">
            상품 소개
          </label>
          <Textarea
            id="productIntro"
            className="productIntro"
            placeholder="상품 소개를 입력해주세요."
            onBlur={handleIntroBlur}
            error={touched.intro && !isIntroValid}
          />
          {introMessage && <p className={styles.alert}>{introMessage}</p>}
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
            onBlur={handlePriceBlur}
            error={touched.price && !isPriceValid}
          />
          {priceMessage && <p className={styles.alert}>{priceMessage}</p>}
        </div>
        <div>
          <label className={styles.label} htmlFor="productTag">
            태그
          </label>
          <ProductTags
            id="productTag"
            error={touched.tag && !isTagValid}
            tags={tags}
            setTags={setTags}
            onBlur={handleTagBlur}
          />
          {tagMessage && <p className={styles.alert}>{tagMessage}</p>}
        </div>
      </form>
    </div>
  );
}

export default addItem;
