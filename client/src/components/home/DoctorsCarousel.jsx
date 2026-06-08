import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

const doctors = [
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
  },
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
  },
  {
    name: "Doctor's Name",
    specialty: "NEUROLOGY",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
  },
];

export default function DoctorsCarousel() {
  const [active, setActive] = useState(1);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">
            Trusted Care
          </p>
          <h2 className="text-4xl font-heading font-bold text-primary">
            Our Doctors
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-72 object-cover object-top"
              />
              <div className="bg-cardBg px-6 py-5 text-center">
                <p className="text-primary font-medium text-lg mb-1">
                  {doc.name}
                </p>
                <p className="text-primary font-bold text-sm tracking-widest mb-3">
                  {doc.specialty}
                </p>
                <div className="flex justify-center gap-3 mb-0">
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
              <Link
                to="/doctors"
                className="block bg-primary text-white text-center py-4 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all ${active === i ? "bg-primary" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
