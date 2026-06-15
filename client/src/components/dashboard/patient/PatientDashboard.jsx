import { useState } from "react";
import { FaHome, FaCalendarAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PatientOverview from "./PatientOverview";
import PatientAppoinments from "./PatientAppoinments";
import PatientProfile from "./PatientProfile";

const menuItems = [
  { id: "overview", label: "Overview", icon: FaHome },
  { id: "appointments", label: "My Appointments", icon: FaCalendarAlt },
  { id: "profile", label: "My Profile", icon: FaUser },
];

export default function PatientDashboard() {
  const [active, setActive] = useState("overview");
  const navigate = useNavigate();

  const renderContent = () => {
    switch (active) {
      case "overview":
        return <PatientOverview setActive={setActive} />;
      case "appointments":
        return <PatientAppoinments />;
      case "profile":
        return <PatientProfile />;
      default:
        return <PatientOverview setActive={setActive} />;
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
          <p className="text-blue-200 text-xs mt-1">Patient Portal</p>
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

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">{renderContent()}</main>
    </div>
  );
}
