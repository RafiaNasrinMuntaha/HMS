// src/layouts/PublicLayout.jsx
import { Outlet } from "react-router-dom";
import QuickContactBar from "../components/common/QuickContactBar";
import Navbar from "../components/common/Navbar";
import GetInTouchModule from "../components/common/GetInTouchModule";
import Footer from "../components/common/Footer";

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <QuickContactBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <GetInTouchModule />
      <Footer />
    </div>
  );
}
