import { Outlet, ScrollRestoration } from 'react-router';
import Header from '@/shared/components/layout/header';
import Footer from '@/shared/components/layout/footer';

export default function HomeLayout() {
  return (
    <>
      <Header variant="home" />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
