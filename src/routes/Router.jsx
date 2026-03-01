import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout/MainLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import List from '@/pages/List';
import SignIn from '@/pages/SignIn';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/items" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
