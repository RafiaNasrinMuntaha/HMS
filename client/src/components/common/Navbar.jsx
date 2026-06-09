import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Specialties", to: "/specialties" },
  { label: "Doctors", to: "/doctors" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-heading">
          <span className="text-white">MEDI</span>
          <span className="text-accent">CORE</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-accent" : "text-white hover:text-accent"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-white hover:text-accent transition-colors">
            <FaSearch size={18} />
          </button>
          <Link
            to="/appointment"
            className="bg-white text-primary font-semibold text-sm px-6 py-2 rounded-full hover:bg-accent hover:text-white transition-all duration-200"
          >
            Appointment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 px-4">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? "text-accent" : "text-white"}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/appointment"
            onClick={() => setMenuOpen(false)}
            className="bg-white text-primary font-semibold text-sm px-6 py-2 rounded-full text-center"
          >
            Appointment
          </Link>
        </div>
      )}
    </nav>
  );
}
