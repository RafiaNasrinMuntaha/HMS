import { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

const initialPosts = [
  {
    id: 1,
    title: "The Importance of Regular Heart Checkups",
    category: "Health Care",
    author: "Prof. Dr Shaikh Md Hasan Mamun",
    date: "2026-01-05",
    status: "Published",
  },
  {
    id: 2,
    title: "Understanding DNA Testing and What It Means for You",
    category: "Medical",
    author: "Dr. Rehnuma Rashid",
    date: "2026-02-24",
    status: "Published",
  },
  {
    id: 3,
    title: "Why Free Checkups Save Lives",
    category: "Surgery",
    author: "Dr. S M Ali Ahsan",
    date: "2026-03-15",
    status: "Published",
  },
];

const empty = { title: "", category: "", author: "", status: "Draft" };

export default function AdminBlog() {
  const [posts, setPosts] = useState(initialPosts);
  const [modal, setModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState(empty);
  const [deleteId, setDeleteId] = useState(null);

  const openAdd = () => {
    setForm(empty);
    setEditId(null);
    setModal(true);
  };
  const openEdit = (post) => {
    setForm(post);
    setEditId(post.id);
    setModal(true);
  };

  const handleSave = () => {
    if (!form.title || !form.category) return;
    if (editId) {
      setPosts((prev) =>
        prev.map((p) => (p.id === editId ? { ...form, id: editId } : p)),
      );
    } else {
      setPosts((prev) => [
        ...prev,
        {
          ...form,
          id: Date.now(),
          date: new Date().toISOString().split("T")[0],
        },
      ]);
    }
    setModal(false);
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    setDeleteId(null);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-heading font-bold text-primary">
          Manage Blog Posts
        </h1>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
        >
          <FaPlus size={13} /> New Post
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {["Title", "Category", "Author", "Date", "Status", "Actions"].map(
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
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4 font-medium text-primary max-w-xs truncate">
                  {post.title}
                </td>
                <td className="px-5 py-4 text-gray-500">{post.category}</td>
                <td className="px-5 py-4 text-gray-500">{post.author}</td>
                <td className="px-5 py-4 text-gray-500">{post.date}</td>
                <td className="px-5 py-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full
                    ${post.status === "Published" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => openEdit(post)}
                      className="text-xs text-blue-500 border border-blue-200 px-3 py-1 rounded-full hover:bg-blue-50 transition-colors flex items-center gap-1"
                    >
                      <FaEdit size={11} /> Edit
                    </button>
                    <button
                      onClick={() => setDeleteId(post.id)}
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
                {editId ? "Edit Post" : "New Blog Post"}
              </h3>
              <button
                onClick={() => setModal(false)}
                className="text-gray-400 hover:text-primary"
              >
                <FaTimes />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-primary block mb-1">
                  Title
                </label>
                <input
                  value={form.title || ""}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Post title..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary block mb-1">
                  Category
                </label>
                <select
                  value={form.category || ""}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors bg-white"
                >
                  <option value="">Select category</option>
                  {["Health Care", "Medical", "Surgery", "Professional"].map(
                    (c) => (
                      <option key={c}>{c}</option>
                    ),
                  )}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-primary block mb-1">
                  Author
                </label>
                <input
                  value={form.author || ""}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  placeholder="Author name..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary block mb-1">
                  Status
                </label>
                <select
                  value={form.status || "Draft"}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-accent transition-colors bg-white"
                >
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                className="flex-1 bg-primary text-white py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
              >
                {editId ? "Save Changes" : "Publish Post"}
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
              Delete Post?
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
