import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

const items = [
  {
    id: 1,
    name: "Neurology",
    icon: Brain,
    description:
      "Expert diagnosis and treatment of neurological disorders including stroke, epilepsy, migraine, and nerve conditions.",
    details: [
      "EEG and nerve conduction studies",
      "Stroke management and rehabilitation",
      "Epilepsy treatment and monitoring",
      "Migraine and headache management",
      "Memory and cognitive disorder care",
    ],
  },
  {
    id: 2,
    name: "Cardiology",
    icon: Heart,
    description:
      "Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases.",
    details: [
      "ECG and echocardiography",
      "Heart failure management",
      "Interventional cardiology",
      "Cardiac rehabilitation",
      "Preventive cardiology",
    ],
  },
  {
    id: 3,
    name: "Gynaecology",
    icon: Baby,
    description:
      "Complete women's health services including maternal care, reproductive health, and gynaecological surgery.",
    details: [
      "Antenatal and postnatal care",
      "High-risk pregnancy management",
      "Laparoscopic surgery",
      "Family planning services",
      "Gynaecological cancer screening",
    ],
  },
  {
    id: 4,
    name: "Orthopaedics",
    icon: Bone,
    description:
      "Treatment of bone, joint, and muscle conditions including fractures, arthritis, and sports injuries.",
    details: [
      "Joint replacement surgery",
      "Spine surgery",
      "Sports injury treatment",
      "Fracture management",
      "Arthritis care",
    ],
  },
  {
    id: 5,
    name: "Oncology",
    icon: Microscope,
    description:
      "Advanced cancer diagnosis and treatment with a multidisciplinary team of oncology specialists.",
    details: [
      "Cancer screening and diagnosis",
      "Chemotherapy and radiation",
      "Surgical oncology",
      "Palliative care",
      "Cancer rehabilitation",
    ],
  },
  {
    id: 6,
    name: "Ophthalmology",
    icon: Eye,
    description:
      "Complete eye care services from routine checkups to complex surgical procedures.",
    details: [
      "Cataract surgery",
      "Glaucoma treatment",
      "Retinal disorders",
      "LASIK consultation",
      "Paediatric eye care",
    ],
  },
  {
    id: 7,
    name: "Free Checkup",
    icon: Stethoscope,
    description:
      "We offer free general health checkups for all patients. Our experienced doctors will assess your overall health condition.",
    details: [
      "Full body general examination",
      "Blood pressure and sugar screening",
      "BMI and weight assessment",
      "Doctor consultation included",
      "Available Monday to Saturday",
    ],
  },
  {
    id: 8,
    name: "Cardiogram",
    icon: Activity,
    description:
      "Advanced ECG and cardiogram services to monitor and diagnose heart conditions with precision and care.",
    details: [
      "12-lead ECG testing",
      "Heart rhythm analysis",
      "Report within 24 hours",
      "Reviewed by senior cardiologist",
      "Suitable for all age groups",
    ],
  },
  {
    id: 9,
    name: "DNA Testing",
    icon: Dna,
    description:
      "Accurate and confidential DNA testing services for medical diagnosis, ancestry, and paternity verification.",
    details: [
      "Paternity and maternity testing",
      "Genetic disease screening",
      "Ancestry and heritage analysis",
      "Fully confidential results",
      "Results delivered within 7 days",
    ],
  },
  {
    id: 10,
    name: "Blood Bank",
    icon: Droplets,
    description:
      "Our blood bank operates 24/7 to ensure safe and timely blood supply for surgeries and emergencies.",
    details: [
      "24/7 blood availability",
      "All blood groups stocked",
      "Rigorous safety screening",
      "Emergency supply within 1 hour",
      "Voluntary donation programs",
    ],
  },
];

const ServicesPage = () => {
  const [selected, setSelected] = useState(items[0]);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle incoming routing state from other pages (e.g. Home)
  useEffect(() => {
    if (location.state?.selectedId) {
      const found = items.find((item) => item.id === location.state.selectedId);
      if (found) setSelected(found);
    }
  }, [location.state]);

  return (
    <div>
      {/* Banner */}
      <div className="bg-blue-50 py-12 px-6 text-center">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#1B3C6B] font-semibold mb-4 hover:underline cursor-pointer"
        >
          ← Back to Home
        </button>
        <h1 className="text-4xl font-bold text-[#1B3C6B]">Our Specialties</h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex gap-10">
        {/* Left Grid Navigation */}
        <div className="w-72 flex-shrink-0 grid grid-cols-2 gap-3 h-fit">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-colors duration-200 cursor-pointer
                  ${
                    selected.id === item.id
                      ? "bg-[#1B3C6B] text-white border-[#1B3C6B]"
                      : "bg-white text-[#1B3C6B] border-gray-200 hover:border-[#3AABBB] hover:text-[#3AABBB]"
                  }`}
              >
                <Icon size={28} className="mb-2" />
                <span className="text-xs font-semibold text-center leading-tight">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Detail Panel */}
        <div className="flex-1 bg-blue-50 rounded-lg p-8">
          {(() => {
            const Icon = selected.icon;
            return (
              <>
                <Icon size={48} className="text-[#3AABBB] mb-4" />
                <h2 className="text-2xl font-bold text-[#1B3C6B] mb-3">
                  {selected.name}
                </h2>
                <p className="text-gray-600 mb-6">{selected.description}</p>

                <h3 className="text-lg font-semibold text-[#1B3C6B] mb-3">
                  What We Offer
                </h3>

                <ul className="space-y-2 mb-8">
                  {selected.details.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span className="text-[#3AABBB] font-bold">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate("/appointment")}
                  className="bg-[#1B3C6B] text-white px-6 py-2 rounded hover:bg-[#3AABBB] transition-colors duration-300 cursor-pointer"
                >
                  Book Appointment
                </button>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
