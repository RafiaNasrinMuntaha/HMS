import { useState } from "react";
import { FaEye, FaTimes } from "react-icons/fa";

const patients = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 1711-000001",
    gender: "Male",
    dob: "1990-05-15",
    visits: 3,
  },
  {
    id: 2,
    name: "Sara Islam",
    email: "sara@example.com",
    phone: "+880 1711-000002",
    gender: "Female",
    dob: "1995-08-22",
    visits: 5,
  },
  {
    id: 3,
    name: "Rahim Uddin",
    email: "rahim@example.com",
    phone: "+880 1711-000003",
    gender: "Male",
    dob: "1985-03-10",
    visits: 1,
  },
  {
    id: 4,
    name: "Nadia Haque",
    email: "nadia@example.com",
    phone: "+880 1711-000004",
    gender: "Female",
    dob: "2000-11-30",
    visits: 2,
  },
  {
    id: 5,
    name: "Karim Ali",
    email: "karim@example.com",
    phone: "+880 1711-000005",
    gender: "Male",
    dob: "1978-07-04",
    visits: 8,
  },
];

export default function AdminPatients() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-heading font-bold text-primary">
          Manage Patients
        </h1>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-accent transition-colors w-64"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {[
                "Name",
                "Email",
                "Phone",
                "Gender",
                "Total Visits",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">
                  No patients found.
                </td>
              </tr>
            ) : (
              filtered.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 font-medium text-primary">
                    {p.name}
                  </td>
                  <td className="px-5 py-4 text-gray-500">{p.email}</td>
                  <td className="px-5 py-4 text-gray-500">{p.phone}</td>
                  <td className="px-5 py-4 text-gray-500">{p.gender}</td>
                  <td className="px-5 py-4 text-gray-500">{p.visits}</td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => setSelected(p)}
                      className="text-xs text-blue-500 border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-1"
                    >
                      <FaEye size={11} /> View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Patient Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-primary">
                Patient Details
              </h3>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-primary"
              >
                <FaTimes />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { label: "Full Name", value: selected.name },
                { label: "Email", value: selected.email },
                { label: "Phone", value: selected.phone },
                { label: "Gender", value: selected.gender },
                { label: "Date of Birth", value: selected.dob },
                { label: "Total Visits", value: selected.visits },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between py-2 border-b border-gray-50"
                >
                  <span className="text-gray-500 text-sm">{label}</span>
                  <span className="text-primary text-sm font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelected(null)}
              className="w-full mt-6 bg-primary text-white py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
