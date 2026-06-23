import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
      <img
        src={doctor.photo || "https://via.placeholder.com/112x128?text=Doctor"}
        alt={doctor.name}
        className="w-28 h-32 object-cover rounded flex-shrink-0"
      />
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg font-bold text-[#1B3C6B]">{doctor.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{doctor.specialty}</p>
        <p className="text-[#3AABBB] font-semibold mt-1">{doctor.department}</p>
        {doctor.bio && (
          <p className="text-gray-400 text-xs mt-1 line-clamp-2">
            {doctor.bio}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <button
            onClick={() => navigate("/appointment")}
            className="bg-[#1B3C6B] text-white px-4 py-2 text-sm rounded hover:bg-[#3AABBB] transition-colors duration-300"
          >
            Request an Appointment
          </button>
          <button
            onClick={() => navigate(`/doctors/${doctor._id}`)}
            className="bg-[#1B3C6B] text-white px-4 py-2 text-sm rounded hover:bg-[#3AABBB] transition-colors duration-300"
          >
            View Doctor Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
