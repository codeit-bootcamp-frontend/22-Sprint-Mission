import styles from './index.module.css';
import cn from 'classnames';
import Input from '@/components/Common/Input';
import Button from '@/components/Common/Button';
import Textarea from '@/components/Common/Textarea';
import AddImgIcon from '@/assets/ic_plus.svg';
import ProductTags from '@/components/ProductTags';
import { useState, useRef } from 'react';
import DelTagImg from '@/assets/ic_X.svg';

function AddItem() {
  // 파일 인풋의 DOM 제어를 위한 ref
  const fileInputRef = useRef(null);
  // 이미지 미리보기 상태
  const [imagePreview, setImagePreview] = useState(null);
  // 태그 배열 상태
  const [tags, setTags] = useState([]);

  // 각 필드의 유효성 검증 상태
  const [isValid, setIsValid] = useState({
    name: false,
    intro: false,
    price: false,
    tag: false,
  });

  // 각 필드의 메세지 상태
  const [message, setMessage] = useState({
    name: '',
    intro: '',
    price: '',
    tag: '',
  });

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
  }
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleBlur = (e, field, message) => {
    const v = e.target.value;

    if (field === 'tag' && tags.length === 0) {
      setIsValid((prev) => ({ ...prev, [field]: false }));
      setMessage((prev) => ({ ...prev, [field]: message }));
      return;
    }

    if (field !== 'tag' && !v) {
      setIsValid((prev) => ({ ...prev, [field]: false }));
      setMessage((prev) => ({ ...prev, [field]: message }));
      return;
    }

    setIsValid((prev) => ({ ...prev, [field]: true }));
    setMessage((prev) => ({ ...prev, [field]: '' }));
  };

  // every는 배열의 모든 값이 트루일 때, 불리언 값을 반환함.
  const isFormValid = Object.values(isValid).every((ele) => ele);

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
            onBlur={(e) => handleBlur(e, 'name', '상품명을 입력해주세요.')}
            error={message.name && !isValid.name}
          />
          {message.name && <p className={styles.alert}>{message.name}</p>}
        </div>
        <div>
          <label className={styles.label} htmlFor="productIntro">
            상품 소개
          </label>
          <Textarea
            id="productIntro"
            className="productIntro"
            placeholder="상품 소개를 입력해주세요."
            onBlur={(e) => handleBlur(e, 'intro', '상품설명을 입력해주세요.')}
            error={message.intro && !isValid.intro}
          />
          {message.intro && <p className={styles.alert}>{message.intro}</p>}
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
            onBlur={(e) => handleBlur(e, 'price', '판매 가격을 입력해주세요.')}
            error={message.price && !isValid.price}
          />
          {message.price && <p className={styles.alert}>{message.price}</p>}
        </div>
        <div>
          <label className={styles.label} htmlFor="productTag">
            태그
          </label>
          <ProductTags
            id="productTag"
            error={message.tag && !isValid.tag}
            tags={tags}
            setTags={setTags}
            onBlur={(e) =>
              handleBlur(e, 'tag', '최소 1개의 태그를 입력해주세요.')
            }
          />
          {message.tag && <p className={styles.alert}>{message.tag}</p>}
        </div>
      </form>
    </div>
  );
}

export default AddItem;
