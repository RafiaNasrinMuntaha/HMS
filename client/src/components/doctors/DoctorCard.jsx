import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-6 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-28 h-32 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#1B3C6B]">{doctor.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{doctor.degree}</p>
        <p className="text-[#3AABBB] font-semibold mt-2">{doctor.role}</p>
        <p className="text-[#3AABBB]">{doctor.department}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-[#1B3C6B] text-white px-4 py-2 text-sm rounded hover:bg-[#3AABBB] transition-colors duration-300 cursor-pointer">
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