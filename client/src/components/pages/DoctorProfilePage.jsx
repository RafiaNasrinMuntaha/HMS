import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../../components/doctors/DoctorGrid";

const DoctorProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return <div className="p-10 text-center">Doctor not found.</div>;
  }

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
          src={doctor.image}
          alt={doctor.name}
          className="w-full sm:w-48 h-56 object-cover rounded border-4 border-[#3AABBB]"
        />
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1B3C6B]">{doctor.name}</h1>
          <p className="text-gray-500 mt-1">{doctor.degree}</p>
          <p className="text-[#3AABBB] font-semibold mt-2">{doctor.role}</p>
          <p className="text-[#3AABBB]">
            Department : {doctor.department}
          </p>

          <h2 className="text-lg font-bold text-[#1B3C6B] mt-6 mb-3">
            Areas of Expertise
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
            {doctor.expertise.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <button
  onClick={() => navigate("/appointment")}
  className="mt-8 bg-[#1B3C6B] text-white px-4 py-2 text-sm rounded hover:bg-[#3AABBB] transition-colors duration-300 cursor-pointer"
>
  Request an Appointment
</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;