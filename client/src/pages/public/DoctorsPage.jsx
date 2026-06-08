import { useNavigate } from "react-router-dom";
import DoctorGrid from "../../components/doctors/DoctorGrid";

const DoctorsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-blue-50 py-12 px-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#1B3C6B] font-semibold mb-4 hover:underline"
        >
          ← Back to Home
        </button>
        <h1 className="text-4xl font-bold text-[#1B3C6B]">Our Doctors</h1>
      </div>
      <DoctorGrid />
    </div>
  );
};

export default DoctorsPage;