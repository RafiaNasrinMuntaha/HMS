import { Outlet, useLocation } from "react-router-dom";
import QuickContactBar from "../components/common/QuickContactBar";
import Navbar from "../components/common/Navbar";
import GetInTouchModule from "../components/common/GetInTouchModule";
import Footer from "../components/common/Footer";

export default function PublicLayout() {
  const location = useLocation();

  // Pages that have their own contact section
  const hideGetInTouch = ["/contact"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <QuickContactBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      {!hideGetInTouch && <GetInTouchModule />}
      <Footer />
    </div>
  );
}
