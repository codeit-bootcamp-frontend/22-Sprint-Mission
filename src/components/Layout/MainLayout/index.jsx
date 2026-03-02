import { Outlet } from 'react-router-dom';
import styles from './index.module.css';
import Header from '@/components/Layout/Header';

function MainLayout() {
  return (
    <div className={styles.layout}>
      <Header className={styles.header} />
      <main className={styles.contentWrap}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
