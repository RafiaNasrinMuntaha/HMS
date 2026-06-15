import { useState } from "react";

const allAppointments = [
  {
    id: 1,
    doctor: "Dr. Asif Ahmed",
    department: "Cardiology",
    date: "2026-06-20",
    time: "10:00 AM",
    status: "Confirmed",
    type: "upcoming",
  },
  {
    id: 2,
    doctor: "Dr. Fahmida Akhter",
    department: "Gynaecology",
    date: "2026-06-25",
    time: "02:00 PM",
    status: "Pending",
    type: "upcoming",
  },
  {
    id: 3,
    doctor: "Prof. Ghulam Kawnayn",
    department: "Neurology",
    date: "2026-05-10",
    time: "11:00 AM",
    status: "Completed",
    type: "past",
  },
  {
    id: 4,
    doctor: "Dr. Rahul Bhan",
    department: "Orthopaedics",
    date: "2026-04-18",
    time: "09:00 AM",
    status: "Completed",
    type: "past",
  },
  {
    id: 5,
    doctor: "Dr. Asif Ahmed",
    department: "Cardiology",
    date: "2026-03-05",
    time: "03:00 PM",
    status: "Cancelled",
    type: "past",
  },
];

const statusStyle = {
  Confirmed: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-600",
  Completed: "bg-blue-100 text-blue-600",
  Cancelled: "bg-red-100 text-red-500",
};

export default function PatientAppoinments() {
  const [tab, setTab] = useState("upcoming");
  const [appointments, setAppointments] = useState(allAppointments);
  const [cancelId, setCancelId] = useState(null);

  const filtered = appointments.filter((a) => a.type === tab);

  const handleCancel = (id) => {
    setAppointments((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, status: "Cancelled", type: "past" } : a,
      ),
    );
    setCancelId(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold text-primary mb-6">
        My Appointments
      </h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {["upcoming", "past"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all
              ${
                tab === t
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-gray-200 hover:border-primary"
              }`}
          >
            {t} Appointments
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Doctor", "Department", "Date", "Time", "Status", "Action"].map(
                (h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">
                  No {tab} appointments found.
                </td>
              </tr>
            ) : (
              filtered.map((apt) => (
                <tr key={apt.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-primary">
                    {apt.doctor}
                  </td>
                  <td className="px-5 py-4 text-gray-500">{apt.department}</td>
                  <td className="px-5 py-4 text-gray-500">{apt.date}</td>
                  <td className="px-5 py-4 text-gray-500">{apt.time}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle[apt.status]}`}
                    >
                      {apt.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    {apt.type === "upcoming" && apt.status !== "Cancelled" ? (
                      <button
                        onClick={() => setCancelId(apt.id)}
                        className="text-xs text-red-500 border border-red-200 px-3 py-1 rounded-full hover:bg-red-50 transition-colors"
                      >
                        Cancel
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

      {/* Cancel Modal */}
      {cancelId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full mx-4 shadow-xl">
            <h3 className="text-lg font-bold text-primary mb-2">
              Cancel Appointment?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Are you sure? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleCancel(cancelId)}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Yes, Cancel
              </button>
              <button
                onClick={() => setCancelId(null)}
                className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Keep It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
