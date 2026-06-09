import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-28 h-32 object-cover rounded flex-shrink-0"
      />
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg font-bold text-[#1B3C6B]">{doctor.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{doctor.degree}</p>
        <p className="text-[#3AABBB] font-semibold mt-2">{doctor.role}</p>
        <p className="text-[#3AABBB]">{doctor.department}</p>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button
            onClick={() => navigate("/appointment")}
            className="bg-[#1B3C6B] text-white px-4 py-2 text-sm rounded hover:bg-[#3AABBB] transition-colors duration-300 cursor-pointer"
          >
            Request an Appointment
          </button>
          <button
            onClick={() => navigate(`/doctors/${doctor.id}`)}
            className="bg-[#1B3C6B] text-white px-4 py-2 text-sm rounded hover:bg-[#3AABBB] transition-colors duration-300 cursor-pointer"
          >
            View Doctor Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;