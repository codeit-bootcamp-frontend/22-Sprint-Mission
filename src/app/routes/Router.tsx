import { createBrowserRouter, RouterProvider } from 'react-router';
import HomeLayout from '@/shared/components/layout/home-layout';
import MainLayout from '@/shared/components/layout/main-layout';
import HomePage from '@/pages/home';
import ItemsPage from '@/pages/items';
import AddItemPage from '@/pages/addItem';

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/items',
        Component: ItemsPage,
      },
      {
        path: '/additem',
        Component: AddItemPage,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
