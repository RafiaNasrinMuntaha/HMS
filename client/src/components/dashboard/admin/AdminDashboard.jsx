import { useState } from "react";
import {
  FaHome,
  FaUserMd,
  FaCalendarAlt,
  FaUsers,
  FaNewspaper,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Local Sub-components sitting in the exact same folder
import AdminOverview from "./AdminOverview.jsx";
import AdminDoctors from "./AdminDoctors.jsx";
import AdminAppointments from "./AdminAppointments.jsx";
import AdminPatients from "./AdminPatients.jsx";
import AdminBlog from "./AdminBlog.jsx";

const menuItems = [
  { id: "overview", label: "Overview", icon: FaHome },
  { id: "doctors", label: "Manage Doctors", icon: FaUserMd },
  { id: "appointments", label: "Appointments", icon: FaCalendarAlt },
  { id: "patients", label: "Manage Patients", icon: FaUsers },
  { id: "blog", label: "Manage Blog", icon: FaNewspaper },
];

export default function AdminDashboard() {
  const [active, setActive] = useState("overview");
  const navigate = useNavigate();

  const renderContent = () => {
    switch (active) {
      case "overview":
        return <AdminOverview setActive={setActive} />;
      case "doctors":
        return <AdminDoctors />;
      case "appointments":
        return <AdminAppointments />;
      case "patients":
        return <AdminPatients />;
      case "blog":
        return <AdminBlog />;
      default:
        return <AdminOverview setActive={setActive} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col fixed h-full z-40">
        <div className="px-6 py-6 border-b border-white/10">
          <h2 className="text-2xl font-heading font-bold">
            <span className="text-white">MEDI</span>
            <span className="text-accent">CORE</span>
          </h2>
          <p className="text-blue-200 text-xs mt-1">Admin Panel</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                ${
                  active === id
                    ? "bg-accent text-white"
                    : "text-blue-200 hover:bg-white/10 hover:text-white"
                }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>

        <div className="px-4 py-6 border-t border-white/10">
          <button
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-blue-200 hover:bg-white/10 hover:text-white transition-all"
          >
            <FaSignOutAlt size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 flex-1 p-8">{renderContent()}</main>
    </div>
  );
}
