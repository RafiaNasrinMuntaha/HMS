import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUserMd, FaDollarSign } from "react-icons/fa";

const quickCards = [
  {
    icon: <FaCalendarAlt size={28} />,
    label: "Book an Appointment",
    to: "/appointment",
    dark: true,
  },
  {
    icon: <FaUserMd size={28} />,
    label: "Book an Appointment",
    to: "/doctors",
    dark: false,
  },
  {
    icon: <FaDollarSign size={28} />,
    label: "Book an Appointment",
    to: "/appointment",
    dark: false,
    accent: true,
  },
];

export default function HeroSection() {
  return (
    <div>
      {/* Hero */}
      <div
        className="relative min-h-[520px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600)`,
          backgroundColor: "#e8f4f8",
        }}
      >
        {/* Light blue circle decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full -translate-x-16 -translate-y-16" />

        <div className="relative z-10 px-8 md:px-20 py-16 max-w-xl">
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
            Caring For Life
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary leading-tight mb-8">
            Leading the Way
            <br />
            in Medical Excellence
          </h1>
          <Link
            to="/services"
            className="inline-block bg-cardBg text-primary font-medium px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-all duration-200"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 -mt-8 relative z-10 px-6 gap-0 shadow-lg">
        {quickCards.map(({ icon, label, to, dark, accent }, i) => (
          <Link
            key={i}
            to={to}
            className={`flex items-center justify-between px-8 py-6 transition-all duration-200 hover:opacity-90
              ${dark ? "bg-primary text-white" : accent ? "bg-accent text-white" : "bg-cardBg text-primary"}
            `}
          >
            <span className="font-medium text-base">{label}</span>
            <span className="opacity-80">{icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
