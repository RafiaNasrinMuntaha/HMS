import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

const initialDoctors = [
  {
    id: 1,
    name: "Prof. Brig. Gen Ghulam Kawnayn",
    department: "Neurology",
    role: "Senior Consultant",
    email: "ghulam@medicore.com",
  },
  {
    id: 2,
    name: "Dr. Asif Ahmed Bin Moin",
    department: "Cardiology",
    role: "Senior Consultant",
    email: "asif@medicore.com",
  },
  {
    id: 3,
    name: "Dr. Fahmida Akhter",
    department: "Gynaecology",
    role: "Consultant",
    email: "fahmida@medicore.com",
  },
  {
    id: 4,
    name: "Dr. Rahul Bhan",
    department: "Orthopaedics",
    role: "Associate Consultant",
    email: "rahul@medicore.com",
  },
];

const empty = { name: "", department: "", role: "", email: "" };

export default function AdminDoctors() {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [modal, setModal] = useState(false);
  const [editDoc, setEditDoc] = useState(null);
  const [form, setForm] = useState(empty);
  const [deleteId, setDeleteId] = useState(null);

  const openAdd = () => {
    setForm(empty);
    setEditDoc(null);
    setModal(true);
  };
  const openEdit = (doc) => {
    setForm(doc);
    setEditDoc(doc.id);
    setModal(true);
  };

  const handleSave = () => {
    if (!form.name || !form.department) return;
    if (editDoc) {
      setDoctors((prev) =>
        prev.map((d) => (d.id === editDoc ? { ...form, id: editDoc } : d)),
      );
    } else {
      setDoctors((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setModal(false);
  };

  const handleDelete = (id) => {
    setDoctors((prev) => prev.filter((d) => d.id !== id));
    setDeleteId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-heading font-bold text-primary">
          Manage Doctors
        </h1>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
        >
          <FaPlus size={13} /> Add Doctor
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Name", "Department", "Role", "Email", "Actions"].map((h) => (
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
            {doctors.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 font-medium text-primary">
                  {doc.name}
                </td>
                <td className="px-5 py-4 text-gray-500">{doc.department}</td>
                <td className="px-5 py-4 text-gray-500">{doc.role}</td>
                <td className="px-5 py-4 text-gray-500">{doc.email}</td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEdit(doc)}
                      className="text-xs text-blue-500 border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-1"
                    >
                      <FaEdit size={11} /> Edit
                    </button>
                    <button
                      onClick={() => setDeleteId(doc.id)}
                      className="text-xs text-red-500 border border-red-200 px-3 py-1 rounded-full hover:bg-red-50 transition-colors flex items-center gap-1"
                    >
                      <FaTrash size={11} /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-primary">
                {editDoc ? "Edit Doctor" : "Add New Doctor"}
              </h3>
              <button
                onClick={() => setModal(false)}
                className="text-gray-400 hover:text-primary"
              >
                <FaTimes />
              </button>
            </div>
            <div className="space-y-4">
              {[
                {
                  field: "name",
                  label: "Full Name",
                  placeholder: "Dr. John Doe",
                },
                {
                  field: "department",
                  label: "Department",
                  placeholder: "Cardiology",
                },
                {
                  field: "role",
                  label: "Role",
                  placeholder: "Senior Consultant",
                },
                {
                  field: "email",
                  label: "Email",
                  placeholder: "doctor@medicore.com",
                },
              ].map(({ field, label, placeholder }) => (
                <div key={field}>
                  <label className="text-sm font-medium text-primary block mb-1">
                    {label}
                  </label>
                  <input
                    value={form[field] || ""}
                    onChange={(e) =>
                      setForm({ ...form, [field]: e.target.value })
                    }
                    placeholder={placeholder}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 bg-primary text-white py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
              >
                {editDoc ? "Save Changes" : "Add Doctor"}
              </button>
              <button
                onClick={() => setModal(false)}
                className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirm */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full mx-4 shadow-xl">
            <h3 className="text-lg font-bold text-primary mb-2">
              Delete Doctor?
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
