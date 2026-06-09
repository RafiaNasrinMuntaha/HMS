import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stethoscope, Activity, Dna, Droplets } from "lucide-react";

const services = [
  { id: 7, icon: Stethoscope, label: "Free Checkup" },
  { id: 8, icon: Activity, label: "Cardiogram" },
  { id: 9, icon: Dna, label: "DNA Testing" },
  { id: 10, icon: Droplets, label: "Blood Bank" },
];

const features = [
  "A Passion for Healing",
  "5-Star Care",
  "All our best",
  "Believe in Us",
  "A Legacy of Excellence",
  "Always Caring",
];

const images = [
  "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
];

export default function ServicesSection() {
  const [active, setActive] = useState(7);
  const navigate = useNavigate();

  const handleServiceClick = (id) => {
    setActive(id);
    navigate("/specialties", { state: { selectedId: id } });
  };

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
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_280px] border border-gray-200 bg-white">
          {/* Left Sidebar — each tab is a link */}
          <div className="flex flex-col border-r border-gray-200">
            {services.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => handleServiceClick(id)}
                className={`flex flex-col items-center justify-center gap-2 py-8 px-4 border-b border-gray-200 transition-all duration-200 cursor-pointer
                  ${
                    active === id
                      ? "bg-primary text-white"
                      : "bg-white text-primary hover:bg-cardBg"
                  }`}
              >
                <Icon size={28} className="text-accent" />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Center Content */}
          <div className="p-8 md:p-10">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
              A passion for putting patients first.
            </h3>

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
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </p>

            <button
              onClick={() => navigate("/specialties")}
              className="text-accent font-semibold hover:underline inline-flex items-center gap-1 text-sm"
            >
              View All Services →
            </button>
          </div>

          {/* Right Images — fixed with explicit height */}
          <div className="flex flex-col">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`service-${i}`}
                className="w-full flex-1 object-cover"
                style={{ height: "200px" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
