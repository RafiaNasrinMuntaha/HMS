import { FaHeartbeat } from "react-icons/fa";
import { useState } from "react";

const specialties = [
  "Neurology",
  "Bones",
  "Oncology",
  "Otorhinolaryngology",
  "Ophthalmology",
  "Cardiovascular",
  "Pulmonology",
  "Renal Medicine",
];

export default function Specialties() {
  const [active, setActive] = useState("Bones");

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">
            Always Caring
          </p>
          <h2 className="text-4xl font-heading font-bold text-primary">
            Our Specialties
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200">
          {specialties.map((name) => (
            <button
              key={name}
              onClick={() => setActive(name)}
              className={`flex flex-col items-center justify-center gap-3 py-10 px-4 border border-gray-200 transition-all duration-200
                ${active === name ? "bg-primary text-white" : "bg-white text-primary hover:bg-cardBg"}
              `}
            >
              <FaHeartbeat
                size={36}
                className={active === name ? "text-accent" : "text-accent"}
              />
              <span className="text-sm font-medium">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
