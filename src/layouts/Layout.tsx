// this component render layout website wich sets navbar and footer
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Layout() {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
