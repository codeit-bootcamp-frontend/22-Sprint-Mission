import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="max-w-300 mx-auto my-0">
        <Outlet />
      </main>
    </>
  );
}
