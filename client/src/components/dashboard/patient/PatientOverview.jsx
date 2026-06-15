import { FaCalendarAlt, FaCheckCircle, FaClock } from "react-icons/fa";

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Asif Ahmed",
    department: "Cardiology",
    date: "2026-06-20",
    time: "10:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    doctor: "Dr. Fahmida Akhter",
    department: "Gynaecology",
    date: "2026-06-25",
    time: "02:00 PM",
    status: "Pending",
  },
];

const stats = [
  {
    label: "Upcoming Appointments",
    value: 2,
    icon: FaCalendarAlt,
    color: "bg-blue-50 text-primary",
  },
  {
    label: "Total Past Visits",
    value: 8,
    icon: FaCheckCircle,
    color: "bg-green-50 text-green-600",
  },
  {
    label: "Pending Requests",
    value: 1,
    icon: FaClock,
    color: "bg-yellow-50 text-yellow-600",
  },
];

export default function PatientOverview({ setActive }) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-primary">
          Welcome back, John Doe 👋
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Here's a summary of your health activity.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div
            key={label}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center gap-4"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}
            >
              <Icon size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">{value}</p>
              <p className="text-gray-500 text-sm">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-heading font-bold text-primary">
            Upcoming Appointments
          </h2>
          <button
            onClick={() => setActive("appointments")}
            className="text-accent text-sm font-medium hover:underline"
          >
            View All →
          </button>
        </div>

        <div className="space-y-4">
          {upcomingAppointments.map((apt) => (
            <div
              key={apt.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="text-primary font-medium text-sm">{apt.doctor}</p>
                <p className="text-gray-400 text-xs">{apt.department}</p>
              </div>
              <div className="text-center">
                <p className="text-primary text-sm font-medium">{apt.date}</p>
                <p className="text-gray-400 text-xs">{apt.time}</p>
              </div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full
                ${
                  apt.status === "Confirmed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {apt.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
