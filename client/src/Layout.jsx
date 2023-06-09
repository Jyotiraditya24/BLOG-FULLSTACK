import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="my-0 mx-auto max-w-xl md:max-w-6xl mb-10 px-20">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </main>
  );
};

export default Layout;
