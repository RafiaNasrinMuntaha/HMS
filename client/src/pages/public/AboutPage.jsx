// Import React icons for feature cards
import { FaHeartbeat, FaHandHoldingHeart, FaStarOfLife, FaSmile, FaShieldAlt, FaTrophy, FaQuoteLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";

const AboutPage = () => {
  const features = [
    { icon: FaHeartbeat, title: 'A Passion for Healing', desc: 'Compassionate care driven by medical excellence.', color: 'text-rose-500' },
    { icon: FaHandHoldingHeart, title: 'All Our Best', desc: 'Every patient receives our full dedication.', color: 'text-emerald-500' },
    { icon: FaStarOfLife, title: 'Always Caring', desc: '24/7 support and empathy for every family.', color: 'text-sky-500' },
    { icon: FaSmile, title: '5-Star Care', desc: 'Recognized for outstanding patient satisfaction.', color: 'text-amber-500' },
    { icon: FaShieldAlt, title: 'Believe in Us', desc: 'Trusted by thousands for generations.', color: 'text-indigo-500' },
    { icon: FaTrophy, title: 'A Legacy of Excellence', desc: 'Decades of innovation in healthcare.', color: 'text-yellow-600' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#1b3a6b] py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4bc8e8] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-[#4bc8e8] text-sm md:text-base mb-2">
            <Link to="/" className="hover:underline opacity-90 hover:opacity-100 transition">Home</Link> / About
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-up">About Us</h1>
          <div className="w-20 h-1 bg-[#4bc8e8] mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            WELCOME TO <span className="text-[#1b3a6b] relative inline-block">MEDICORE</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#4bc8e8] font-semibold mb-6">Best Care for Your Good Health</p>
          <div className="w-24 h-1 bg-gray-200 mx-auto rounded-full"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, idx) => (
            <div key={idx} className="group bg-[#d6e4f7] p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-default border border-transparent hover:border-[#4bc8e8]">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  <feature.icon className={`text-4xl ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-[#1b3a6b] transition-colors">{feature.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Description Box - without Since 2024 badge */}
        <div className="relative bg-gradient-to-br from-[#d6e4f7] to-[#eef3fc] rounded-2xl shadow-xl p-8 md:p-10 text-gray-700 leading-relaxed overflow-hidden">
          <div className="absolute top-4 right-4 text-[#1b3a6b] opacity-10">
            <FaQuoteLeft size={80} />
          </div>
          <div className="relative z-10">
            <p className="mb-5 text-base md:text-lg font-medium">
              At <strong className="text-[#1b3a6b] text-lg">MediCore</strong>, we are dedicated to providing compassionate, 
              patient-centered healthcare that prioritizes your well-being. Our team of experienced doctors, 
              nurses, and support staff work together to ensure you receive the highest quality medical treatment 
              with dignity and respect.
            </p>
            <p className="text-base md:text-lg">
              With world-class facilities and a commitment to innovation, we offer a wide range of specialized 
              services tailored to meet the unique needs of every patient. Your health is our mission – and we are 
              honored to be your trusted partner on the journey to better health.
            </p>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;