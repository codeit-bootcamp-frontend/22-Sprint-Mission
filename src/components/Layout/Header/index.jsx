import LogoImage from '@/assets/logo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './index.module.css';
import Button from '@/components/Common/Button';

function Header() {
  const location = useLocation();

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
        <div className={styles.menuWrap}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.menu} ${styles.active}` : styles.menu
            }
            to="/"
          >
            자유게시판
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive || location.pathname.startsWith('/additem')
                ? `${styles.menu} ${styles.active}`
                : styles.menu
            }
            to="/items"
          >
            중고마켓
          </NavLink>
        </div>

        <Link to="/login">
          <Button className="primary btnS">로그인</Button>
        </Link>
      </nav>
    </header>
  );
}
export default Header;
