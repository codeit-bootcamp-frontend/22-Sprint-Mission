import styles from './index.module.css';
import homeTopImage from '@/assets/img_home_top.svg';
import home01Image from '@/assets/img_home_01.svg';
import home02Image from '@/assets/img_home_02.svg';
import home03Image from '@/assets/img_home_03.svg';
import homeBottomImage from '@/assets/img_home_bottom.svg';
import { Link } from 'react-router-dom';
import Button from '@/components/Common/Button';
import cn from 'classnames';

function Home() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.conWrap}>
          <div className={styles.txtWrap}>
            <p className={styles.bigTxt}>
              일상의 모든 물건을 <br />
              거래해 보세요
            </p>
            <Button className="primary btnL">
              <Link className={styles.btn} to="/items">
                구경하러 가기
              </Link>
            </Button>
          </div>
          <div className={styles.imgWrap}>
            <img src={homeTopImage} alt="판다곰 1마리" />
          </div>
        </div>
      </div>
      <section className={styles.sectionWrap}>
        <div className={cn(styles.conWrap, styles.first)}>
          <div className={styles.imgWrap}>
            <img src={home01Image} alt="Hot item 인기 상품을 확인해 보세요" />
          </div>
          <div className={styles.txtWrap}>
            <p className={styles.cate}>Hot item</p>
            <p className={styles.title}>
              인기 상품을 <br />
              확인해 보세요
            </p>
            <p className={styles.descripsion}>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
        <div className={cn(styles.conWrap, styles.second)}>
          <div className={styles.imgWrap}>
            <img
              src={home02Image}
              alt="Search 구매를 원하는 상품을 검색하세요"
            />
          </div>
          <div className={styles.txtWrap}>
            <p className={styles.cate}>Search</p>
            <p className={styles.title}>
              구매를 원하는 <br />
              상품을 검색하세요
            </p>
            <p className={styles.descripsion}>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
        <div className={cn(styles.conWrap, styles.third)}>
          <div className={styles.imgWrap}>
            <img
              src={home03Image}
              alt="Register 판매를 원하는 상품을 등록하세요"
            />
          </div>
          <div className={styles.txtWrap}>
            <p className={styles.cate}>Register</p>
            <p className={styles.title}>
              판매를 원하는 <br />
              상품을 등록하세요
            </p>
            <p className={styles.descripsion}>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
      <div className={styles.bottomBanner}>
        <div className={styles.conWrap}>
          <div className={styles.txtWrap}>
            <p className={styles.bigTxt}>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </p>
          </div>
          <div className={styles.imgWrap}>
            <img src={homeBottomImage} alt="판다곰 2마리 인사함" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
