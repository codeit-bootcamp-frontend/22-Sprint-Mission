import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout/MainLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import List from '@/pages/List';
import SignIn from '@/pages/SignIn';
import AddItem from '@/pages/AddItem';
import Items from '@/pages/Items';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<List />} />
          <Route path="/items/:id" element={<Items />} />
          <Route path="/additem" element={<AddItem />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
