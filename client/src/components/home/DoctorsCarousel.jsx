import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { doctors } from "../doctors/DoctorGrid";

export default function DoctorsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  // How many items to show at once
  const slidesToShow = 3;
  const visible = doctors.slice(startIndex, startIndex + slidesToShow);

  // Calculate the maximum start index allowed
  const maxStartIndex = Math.max(0, doctors.length - slidesToShow);

  const prev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const next = () => setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));

  // Create an array of valid steps for the indicator dots
  const totalSteps = Array.from({ length: maxStartIndex + 1 });

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">
            Trusted Care
          </p>
          <h2 className="text-4xl font-heading font-bold text-primary">
            Our Doctors
          </h2>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((doc) => (
            <div
              key={doc.id}
              className="rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-72 object-cover object-top"
                />
                <div className="bg-cardBg px-6 py-5 text-center">
                  <p className="text-primary font-medium text-lg mb-1">
                    {doc.name}
                  </p>
                  <p className="text-primary font-bold text-xs tracking-widest mb-3 uppercase">
                    {doc.department}
                  </p>
                  <div className="flex justify-center gap-3">
                    {[FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, j) => (
                      <a
                        key={j}
                        href="#"
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white text-primary transition-all"
                      >
                        <Icon size={13} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate(`/doctors/${doc.id}`)}
                className="block w-full bg-primary text-white text-center py-4 text-sm font-medium hover:bg-accent transition-colors duration-200"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prev}
            disabled={startIndex === 0}
            className="w-9 h-9 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronLeft size={13} />
          </button>

          {/* Corrected Dot Indicators */}
          {totalSteps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === startIndex ? "bg-primary w-5" : "bg-gray-300"
              }`}
            />
          ))}

          <button
            onClick={next}
            disabled={startIndex >= maxStartIndex}
            className="w-9 h-9 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <FaChevronRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
