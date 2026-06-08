// Import React icons for feature cards
import { FaHeartbeat, FaHandHoldingHeart, FaStarOfLife, FaSmile, FaShieldAlt, FaTrophy } from 'react-icons/fa';

const AboutPage = () => {
  // ---------- 1. FEATURE DATA ----------
  // Array of objects containing icon, title, and description for each feature card
  const features = [
    { icon: FaHeartbeat, title: 'A Passion for Healing', desc: 'Compassionate care driven by medical excellence.' },
    { icon: FaHandHoldingHeart, title: 'All Our Best', desc: 'Every patient receives our full dedication.' },
    { icon: FaStarOfLife, title: 'Always Caring', desc: '24/7 support and empathy for every family.' },
    { icon: FaSmile, title: '5-Star Care', desc: 'Recognized for outstanding patient satisfaction.' },
    { icon: FaShieldAlt, title: 'Believe in Us', desc: 'Trusted by thousands for generations.' },
    { icon: FaTrophy, title: 'A Legacy of Excellence', desc: 'Decades of innovation in healthcare.' }
  ];

  // ---------- 2. COMPONENT RENDER (JSX) ----------
  return (
    <div className="bg-white">
      {/* ----- Hero / Breadcrumb Section (Primary Color Background) ----- */}
      <div className="bg-[#1b3a6b] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb navigation indicator */}
          <p className="text-[#4bc8e8] text-sm mb-2">Home / About</p>
          {/* Page main heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* ----- Main Content Container ----- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* ----- Welcome Section ----- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            WELCOME TO <span className="text-[#1b3a6b]"> MEDICORE </span>
          </h2>
          <p className="text-xl text-[#4bc8e8] font-semibold mb-8">
            Best Care for Your Good Health
          </p>
        </div>

        {/* ----- Feature Cards Grid (3 columns on large screens) ----- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            // Each feature card with hover effect
            <div key={idx} className="bg-[#d6e4f7] p-6 rounded-xl shadow-md hover:shadow-lg transition">
              {/* Icon with primary color */}
              <feature.icon className="text-[#1b3a6b] text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* ----- Description Box ----- */}
         <div className="bg-[#d6e4f7] rounded-xl shadow-md p-8 text-gray-600 leading-relaxed">
          <p className="mb-4">
            At <strong className="text-[#1b3a6b]">MediCore</strong>, we are dedicated to providing compassionate, 
            patient-centered healthcare that prioritizes your well-being. Our team of experienced doctors, 
            nurses, and support staff work together to ensure you receive the highest quality medical treatment 
            with dignity and respect.
          </p>
          <p>
            With world-class facilities and a commitment to innovation, we offer a wide range of specialized 
            services tailored to meet the unique needs of every patient. Your health is our mission – and we are 
            honored to be your trusted partner on the journey to better health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;