import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    // TODO: connect to backend
    navigate("/patient/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold font-heading">
            <span className="text-primary">MEDI</span>
            <span className="text-accent">CORE</span>
          </Link>
          <p className="text-gray-500 text-sm mt-2">Sign in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-primary block mb-1.5">
                Email Address
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-accent transition-colors">
                <span className="px-3 text-gray-400">
                  <FaEnvelope size={15} />
                </span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="flex-1 py-3 pr-4 text-sm outline-none text-primary"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-primary block mb-1.5">
                Password
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-accent transition-colors">
                <span className="px-3 text-gray-400">
                  <FaLock size={15} />
                </span>
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="flex-1 py-3 text-sm outline-none text-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="px-3 text-gray-400 hover:text-primary transition-colors"
                >
                  {showPass ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                  className="accent-primary"
                />
                Remember me
              </label>
              <a href="#" className="text-accent hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-accent transition-all duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <hr className="flex-1 border-gray-200" />
            <span className="text-gray-400 text-xs">or</span>
            <hr className="flex-1 border-gray-200" />
          </div>

          {/* Patient ID login option */}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-accent font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
