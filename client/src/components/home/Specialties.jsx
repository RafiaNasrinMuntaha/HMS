import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  Heart,
  Baby,
  Bone,
  Microscope,
  Eye,
  Stethoscope,
  Activity,
  Dna,
  Droplets,
} from "lucide-react";

const specialties = [
  { id: 1, name: "Neurology", icon: Brain },
  { id: 2, name: "Cardiology", icon: Heart },
  { id: 3, name: "Gynaecology", icon: Baby },
  { id: 4, name: "Orthopaedics", icon: Bone },
  { id: 5, name: "Oncology", icon: Microscope },
  { id: 6, name: "Ophthalmology", icon: Eye },
  { id: 7, name: "Free Checkup", icon: Stethoscope },
  { id: 8, name: "Cardiogram", icon: Activity },
  { id: 9, name: "DNA Testing", icon: Dna },
  { id: 10, name: "Blood Bank", icon: Droplets },
];

export default function Specialties() {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();

  const handleClick = (item) => {
    setActive(item.id);
    navigate("/specialties", { state: { selectedId: item.id } });
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">
            Always Caring
          </p>
          <h2 className="text-4xl font-heading font-bold text-primary">
            Our Specialties
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 border border-gray-200">
          {specialties.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleClick({ id, name })}
              className={`flex flex-col items-center justify-center gap-3 py-10 px-4 border border-gray-200 transition-all duration-200 cursor-pointer
                ${active === id ? "bg-primary text-white" : "bg-white text-primary hover:bg-cardBg"}
              `}
            >
              <Icon size={32} className="text-accent" />
              <span className="text-sm font-medium">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
