import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaClock, FaPhoneAlt, FaAmbulance } from 'react-icons/fa';

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '', gender: '', email: '', phone: '', date: '', doctor: '', department: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Data:', formData);
    alert('Appointment request submitted (demo)');
  };

  const schedule = [
    { day: 'Monday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Tuesday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Wednesday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Thursday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Friday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Saturday', hours: '09:00 AM - 07:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4">
            <p className="text-[#4bc8e8] text-base md:text-lg">
              <Link to="/" className="hover:underline">Home</Link> / Appointment
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Book an <span className="text-[#1b3a6b]">Appointment</span>
          </h1>
          <p className="text-gray-600 max-w-full text-lg md:text-xl leading-relaxed">
            Request an appointment with our expert doctors at your convenience. Fill out the form and we will confirm your preferred date and time within 24 hours.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* LEFT: Appointment Form Card with hover effect */}
          <div className="lg:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#1b3a6b] rounded-full"></span>
                Appointment Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 focus:ring-2 focus:ring-[#4bc8e8] focus:border-[#1b3a6b] focus:shadow-md outline-none" required />
                  </div>
                  {/* Gender */}
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 focus:ring-2 focus:ring-[#4bc8e8] focus:border-[#1b3a6b] focus:shadow-md outline-none" required>
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 focus:ring-2 focus:ring-[#4bc8e8] focus:border-[#1b3a6b] focus:shadow-md outline-none" required />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 focus:ring-2 focus:ring-[#4bc8e8] focus:border-[#1b3a6b] focus:shadow-md outline-none" required />
                  </div>
                  {/* Date */}
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 focus:ring-2 focus:ring-[#4bc8e8] focus:border-[#1b3a6b] focus:shadow-md outline-none" required />
                  </div>
                  {/* Doctor */}
                  <div>
                    <label className="block text-gray-700 mb-1 font-medium">Doctor</label>
                    <input type="text" name="doctor" value={formData.doctor} onChange={handleChange} 
                      placeholder="Doctor's name" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 focus:ring-2 focus:ring-[#4bc8e8] focus:border-[#1b3a6b] focus:shadow-md outline-none" />
                  </div>
                  {/* Department */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-1 font-medium">Department</label>
                    <select name="department" value={formData.department} onChange={handleChange} 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 focus:ring-2 focus:ring-[#4bc8e8] focus:border-[#1b3a6b] focus:shadow-md outline-none" required>
                      <option value="">Select Department</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                      <option>Pediatrics</option>
                      <option>Orthopedics</option>
                      <option>Bones</option>
                      <option>Oncology</option>
                      <option>Otorhinolaryngology</option>
                      <option>Ophthalmology</option>
                      <option>Cardiovascular</option>
                      <option>Pulmonology</option>
                      <option>Renal Medicine</option>
                    </select>
                  </div>
                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-1 font-medium">Message</label>
                    <textarea name="message" rows="3" value={formData.message} onChange={handleChange} 
                      placeholder="Any additional information..." 
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 transition-all duration-200 focus:ring-2 focus:ring-[#4bc8e8] focus:border-[#1b3a6b] focus:shadow-md outline-none"></textarea>
                  </div>
                </div>
                {/* Submit Button with animation */}
                <button type="submit" 
                  className="w-full md:w-auto bg-[#1b3a6b] hover:bg-[#0f2a4a] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md">
                  SUBMIT 
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: Combined Card (Schedule + Emergency) with hover effect */}
          <div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col border border-gray-100">
              {/* Schedule Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 flex items-center gap-2">
                  <FaClock className="text-[#4bc8e8] text-xl" />
                  Schedule hours
                </h2>
                <div className="space-y-3">
                  {schedule.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-50">
                      <span className="font-semibold text-gray-700">{item.day}</span>
                      <span className={item.day === 'Sunday' ? 'text-red-500 font-bold' : 'text-gray-600'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider with gradient */}
              <div className="border-t border-gray-200 my-6 relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-white px-2 text-xs text-gray-400">24/7</div>
              </div>

              {/* Emergency Section - modern gradient background */}
              <div className="flex-1 flex flex-col justify-center bg-gradient-to-br from-[#d6e4f7] to-[#c0d4f0] rounded-xl p-5 shadow-inner">
                <div className="flex items-center gap-3 mb-2">
                  <FaAmbulance className="text-[#1b3a6b] text-4xl animate-pulse" />
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b]">Emergency</h2>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-[#1b3a6b] mt-1 break-words flex items-center gap-2">
                  <FaPhoneAlt className="text-xl" /> (237) 681-812-255
                </p>
                <p className="text-gray-700 mt-3 text-sm font-medium">24/7 – Immediate assistance available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;