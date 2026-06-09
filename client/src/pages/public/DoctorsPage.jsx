import { useNavigate } from "react-router-dom";
import DoctorGrid from "../../components/doctors/DoctorGrid";

const DoctorsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="relative py-10 sm:py-12 px-4 sm:px-6"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1600&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-50/80" />
        <div className="relative z-10">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-[#1B3C6B] font-semibold mb-4 hover:underline"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-bold text-[#1B3C6B] text-center">Our Doctors</h1>
        </div>
      </div>
      <DoctorGrid />
    </div>
  );
};

export default DoctorsPage;