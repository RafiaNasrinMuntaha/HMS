import { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Free Checkup",
    icon: "🩺",
    description:
      "We offer free general health checkups for all patients. Our experienced doctors will assess your overall health condition and recommend the best course of action.",
    details: [
      "Full body general examination",
      "Blood pressure and sugar screening",
      "BMI and weight assessment",
      "Doctor consultation included",
      "Available Monday to Saturday",
    ],
  },
  {
    id: 2,
    name: "Cardiogram",
    icon: "❤️",
    description:
      "Our cardiology unit provides advanced ECG and cardiogram services to monitor and diagnose heart conditions with precision and care.",
    details: [
      "12-lead ECG testing",
      "Heart rhythm analysis",
      "Report provided within 24 hours",
      "Reviewed by senior cardiologist",
      "Suitable for all age groups",
    ],
  },
  {
    id: 3,
    name: "DNA Testing",
    icon: "🧬",
    description:
      "We provide accurate and confidential DNA testing services for medical diagnosis, ancestry, and paternity verification purposes.",
    details: [
      "Paternity and maternity testing",
      "Genetic disease screening",
      "Ancestry and heritage analysis",
      "Fully confidential results",
      "Results delivered within 7 days",
    ],
  },
  {
    id: 4,
    name: "Blood Bank",
    icon: "🩸",
    description:
      "Our blood bank operates 24/7 to ensure safe and timely blood supply for surgeries, emergencies, and transfusions.",
    details: [
      "24/7 blood availability",
      "All blood groups stocked",
      "Rigorous safety screening",
      "Emergency supply within 1 hour",
      "Voluntary donation programs available",
    ],
  },
];

const ServicesPage = () => {
  const [selected, setSelected] = useState(services[0]);
  const navigate = useNavigate();

  return (
    <div>
      {/* Banner */}
      <div className="bg-blue-50 py-12 px-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#1B3C6B] font-semibold mb-4 hover:underline"
        >
          ← Back to Home
        </button>
        <h1 className="text-4xl font-bold text-[#1B3C6B]">Our Services</h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex gap-10">

        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelected(service)}
              className={`w-full text-left px-5 py-4 mb-2 rounded flex items-center gap-3 font-semibold transition-colors duration-200 cursor-pointer
                ${
                  selected.id === service.id
                    ? "bg-[#1B3C6B] text-white"
                    : "bg-blue-50 text-[#1B3C6B] hover:bg-[#3AABBB] hover:text-white"
                }`}
            >
              <span>{service.icon}</span>
              {service.name}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#1B3C6B] mb-4">
            {selected.name}
          </h2>
          <p className="text-gray-600 mb-6">{selected.description}</p>

          <h3 className="text-lg font-semibold text-[#1B3C6B] mb-3">
            What's Included
          </h3>
          <ul className="space-y-2">
            {selected.details.map((point, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <span className="text-[#3AABBB] font-bold">✓</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;