import {
  FaUsers,
  FaUserMd,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const stats = [
  {
    label: "Total Patients",
    value: 124,
    icon: FaUsers,
    color: "bg-blue-50 text-primary",
  },
  {
    label: "Total Doctors",
    value: 12,
    icon: FaUserMd,
    color: "bg-teal-50 text-accent",
  },
  {
    label: "Today's Appointments",
    value: 8,
    icon: FaCalendarAlt,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    label: "Completed Today",
    value: 3,
    icon: FaCheckCircle,
    color: "bg-green-50 text-green-600",
  },
];

const recentAppointments = [
  {
    patient: "John Doe",
    doctor: "Dr. Asif Ahmed",
    department: "Cardiology",
    time: "09:00 AM",
    status: "Confirmed",
  },
  {
    patient: "Sara Islam",
    doctor: "Dr. Fahmida Akhter",
    department: "Gynaecology",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    patient: "Rahim Uddin",
    doctor: "Prof. Ghulam",
    department: "Neurology",
    time: "11:00 AM",
    status: "Completed",
  },
  {
    patient: "Nadia Haque",
    doctor: "Dr. Rahul Bhan",
    department: "Orthopaedics",
    time: "02:00 PM",
    status: "Pending",
  },
];

const statusStyle = {
  Confirmed: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Completed: "bg-blue-100 text-blue-600",
  Cancelled: "bg-red-100 text-red-500",
};

export default function AdminOverview({ setActive }) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-primary">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back, Admin</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
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

      {/* Recent Appointments */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-heading font-bold text-primary">
            Recent Appointments
          </h2>
          <button
            onClick={() => setActive("appointments")}
            className="text-accent text-sm font-medium hover:underline"
          >
            View All →
          </button>
        </div>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Patient", "Doctor", "Department", "Time", "Status"].map(
                (h) => (
                  <th
                    key={h}
                    className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {recentAppointments.map((apt, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-primary">
                  {apt.patient}
                </td>
                <td className="px-4 py-3 text-gray-500">{apt.doctor}</td>
                <td className="px-4 py-3 text-gray-500">{apt.department}</td>
                <td className="px-4 py-3 text-gray-500">{apt.time}</td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle[apt.status]}`}
                  >
                    {apt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
