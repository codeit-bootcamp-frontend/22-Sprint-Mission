import { Outlet, ScrollRestoration } from 'react-router';
import Header from '@/shared/components/layout/header';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FCFCFC]">
      <Header variant="main" />
      <main className="w-full flex-1 px-6 pt-6 pb-12">
        <div className="mx-auto w-full max-w-300">
          <Outlet />
        </div>
      </main>
      <ScrollRestoration />
    </div>
  );
}
