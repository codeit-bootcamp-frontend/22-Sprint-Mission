import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout/MainLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import List from '@/pages/List';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/item" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
