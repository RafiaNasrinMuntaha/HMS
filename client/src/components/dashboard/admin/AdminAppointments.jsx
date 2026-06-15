import { useState } from "react";

const initialAppointments = [
  {
    id: 1,
    patient: "John Doe",
    doctor: "Dr. Asif Ahmed",
    department: "Cardiology",
    date: "2026-06-15",
    time: "09:00 AM",
    status: "Confirmed",
  },
  {
    id: 2,
    patient: "Sara Islam",
    doctor: "Dr. Fahmida Akhter",
    department: "Gynaecology",
    date: "2026-06-15",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    id: 3,
    patient: "Rahim Uddin",
    doctor: "Prof. Ghulam Kawnayn",
    department: "Neurology",
    date: "2026-06-15",
    time: "11:00 AM",
    status: "Completed",
  },
  {
    id: 4,
    patient: "Nadia Haque",
    doctor: "Dr. Rahul Bhan",
    department: "Orthopaedics",
    date: "2026-06-16",
    time: "02:00 PM",
    status: "Pending",
  },
  {
    id: 5,
    patient: "Karim Ali",
    doctor: "Dr. Asif Ahmed",
    department: "Cardiology",
    date: "2026-06-16",
    time: "03:30 PM",
    status: "Cancelled",
  },
];

const statusStyle = {
  Pending: "bg-yellow-100 text-yellow-600",
  Confirmed: "bg-green-100 text-green-600",
  Completed: "bg-blue-100 text-blue-600",
  Cancelled: "bg-red-100 text-red-500",
};

const nextStatus = {
  Pending: "Confirmed",
  Confirmed: "Completed",
};

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState(initialAppointments);
  const [filter, setFilter] = useState("All");

  const statuses = ["All", "Pending", "Confirmed", "Completed", "Cancelled"];

  const filtered =
    filter === "All"
      ? appointments
      : appointments.filter((a) => a.status === filter);

  const updateStatus = (id) => {
    setAppointments((prev) =>
      prev.map((a) =>
        a.id === id && nextStatus[a.status]
          ? { ...a, status: nextStatus[a.status] }
          : a,
      ),
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-primary mb-6">
        Manage Appointments
      </h1>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all
              ${filter === s ? "bg-primary text-white" : "bg-white text-primary border border-gray-200 hover:border-primary"}`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {[
                "Patient",
                "Doctor",
                "Department",
                "Date",
                "Time",
                "Status",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-400">
                  No appointments found.
                </td>
              </tr>
            ) : (
              filtered.map((apt) => (
                <tr key={apt.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-primary">
                    {apt.patient}
                  </td>
                  <td className="px-4 py-3 text-gray-500">{apt.doctor}</td>
                  <td className="px-4 py-3 text-gray-500">{apt.department}</td>
                  <td className="px-4 py-3 text-gray-500">{apt.date}</td>
                  <td className="px-4 py-3 text-gray-500">{apt.time}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle[apt.status]}`}
                    >
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {nextStatus[apt.status] ? (
                      <button
                        onClick={() => updateStatus(apt.id)}
                        className="text-xs text-primary border border-primary/30 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        → {nextStatus[apt.status]}
                      </button>
                    ) : (
                      <span className="text-gray-300 text-xs">—</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
