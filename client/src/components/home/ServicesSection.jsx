import { useState } from "react";
import { FaHeartbeat, FaDna, FaTint, FaStethoscope } from "react-icons/fa";

const services = [
  {
    id: "checkup",
    icon: <FaStethoscope size={28} />,
    label: "Free Checkup",
  },
  {
    id: "cardiogram",
    icon: <FaHeartbeat size={28} />,
    label: "Cardiogram",
  },
  {
    id: "dna",
    icon: <FaDna size={28} />,
    label: "Dna Testing",
  },
  {
    id: "blood",
    icon: <FaTint size={28} />,
    label: "Blood Bank",
  },
];

const features = [
  "A Passion for Healing",
  "5-Star Care",
  "All our best",
  "Believe in Us",
  "A Legacy of Excellence",
  "Always Caring",
];

export default function ServicesSection() {
  const [active, setActive] = useState("cardiogram");

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">
            Care You Can Believe In
          </p>
          <h2 className="text-4xl font-heading font-bold text-primary">
            Our Services
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_320px] gap-0 border border-gray-200 bg-white">
          {/* Left Sidebar */}
          <div className="flex flex-col border-r border-gray-200">
            {services.map(({ id, icon, label }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex flex-col items-center justify-center gap-2 py-8 px-4 border-b border-gray-200 transition-all duration-200
                  ${active === id ? "bg-primary text-white" : "bg-white text-primary hover:bg-cardBg"}
                `}
              >
                <span className={active === id ? "text-accent" : "text-accent"}>
                  {icon}
                </span>
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Center Content */}
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
              A passion for putting patients first.
            </h3>

            {/* Feature checklist */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </p>
          </div>

          {/* Right Images */}
          <div className="flex flex-col gap-0">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
              alt="Service"
              className="w-full h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600"
              alt="Service"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
