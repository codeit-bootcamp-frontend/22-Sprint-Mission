import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Layout from "./Layout";
import ItemsPage from "./pages/ItemsPage";
import AddItemPage from "./pages/AddItemPage";
import MainPage from "./pages/MainPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Route>
    </Routes>
  );
}
