import LogoImage from '@/assets/logo.svg';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import Button from '@/components/Common/Button';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.headerWrap}>
        <h1 className={styles.logo}>
          <Link to="/">
            <img
              src={LogoImage}
              className={styles.headerlogo}
              alt="판다마켓 로고"
            />
          </Link>
        </h1>
        <Button className="primary btnS">
          <Link to="/login">로그인</Link>
        </Button>
      </nav>
    </header>
  );
}
export default Header;
