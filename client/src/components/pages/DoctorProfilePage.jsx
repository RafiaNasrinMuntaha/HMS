import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoctorByIdApi } from "../../services/doctorService.js";

const DoctorProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      setLoading(true);
      try {
        const data = await getDoctorByIdApi(id);
        setDoctor(data);
      } catch (err) {
        console.error("Failed to fetch doctor:", err);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading)
    return <div className="p-10 text-center text-gray-400">Loading...</div>;
  if (notFound || !doctor)
    return <div className="p-10 text-center">Doctor not found.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <button
        onClick={() => navigate("/doctors")}
        className="flex items-center gap-2 text-[#1B3C6B] font-semibold mb-8 hover:underline"
      >
        ← Back to Doctors
      </button>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
        <img
          src={
            doctor.photo || "https://via.placeholder.com/192x224?text=Doctor"
          }
          alt={doctor.name}
          className="w-full sm:w-48 h-56 object-cover rounded border-4 border-[#3AABBB]"
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B3C6B]">
            {doctor.name}
          </h1>
          <p className="text-[#3AABBB] font-semibold mt-2">
            {doctor.specialty}
          </p>
          <p className="text-[#3AABBB]">Department: {doctor.department}</p>
          {doctor.email && (
            <p className="text-gray-500 text-sm mt-1">✉ {doctor.email}</p>
          )}
          {doctor.phone && (
            <p className="text-gray-500 text-sm">📞 {doctor.phone}</p>
          )}

          {doctor.bio && (
            <>
              <h2 className="text-lg font-bold text-[#1B3C6B] mt-6 mb-2">
                About
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {doctor.bio}
              </p>
            </>
          )}

          <div className="mt-3">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full
              ${doctor.available ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"}`}
            >
              {doctor.available
                ? "✅ Accepting appointments"
                : "❌ Not available"}
            </span>
          </div>

          <button
            onClick={() => navigate("/appointment")}
            className="mt-6 bg-[#1B3C6B] text-white px-6 py-2 text-sm rounded hover:bg-[#3AABBB] transition-colors duration-300"
          >
            Request an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;
