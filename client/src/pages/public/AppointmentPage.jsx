// Import React hook for managing form state
import { useState } from 'react';

const AppointmentPage = () => {
  // ---------- FORM STATE ----------
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    date: '',
    doctor: '',
    department: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Data:', formData);
    alert('Appointment request submitted (demo)');
  };

  // ---------- SCHEDULE DATA ----------
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
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  Book an <span className="text-[#1b3a6b]">Appointment</span>
                  
            </h1>
         
         <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
           Request an appointment with our expert doctors at your convenience. Fill out the form and we will confirm your preferred date and time within 24 hours.
          </p>
        </div>

        {/* Two column layout - equal height automatically */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Appointment Form (2/3 width) */}
          <div className="lg:col-span-2 h-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Appointment Form</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#4bc8e8] focus:border-[#1b3a6b]"
                      required
                    />
                  </div>
                  {/* Gender */}
                  <div>
                    <label className="block text-gray-700 mb-1">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      required
                    >
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      required
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      required
                    />
                  </div>
                  {/* Date */}
                  <div>
                    <label className="block text-gray-700 mb-1">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      required
                    />
                  </div>
                  {/* Doctor */}
                  <div>
                    <label className="block text-gray-700 mb-1">Doctor</label>
                    <input
                      type="text"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      placeholder="Doctor's name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                  {/* Department */}
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-1">Department</label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      required
                    >
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
                    <label className="block text-gray-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any additional information..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    />
                  </div>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#1b3a6b] hover:bg-[#0f2a4a] text-white font-bold py-3 px-8 rounded-lg transition shadow-md"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN: Combined Card */}
          <div className="h-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
              {/* Schedule Hours Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Schedule hours</h2>
                <div className="space-y-2">
                  {schedule.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{item.day}</span>
                      <span className={item.day === 'Sunday' ? 'text-red-500 font-semibold' : 'text-gray-600'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* Emergency Section - fills remaining space, content centered */}
              <div className="flex-1 flex flex-col justify-center bg-[#d6e4f7] rounded-xl p-5">
                {/* BIG heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#1b3a6b] mb-3 flex items-center gap-2">
                  📞 Emergency
                </h2>
                {/* SMALL phone number */}
                <p className="text-xl md:text-2xl font-semibold text-[#1b3a6b] mt-1 break-words">
                  (237) 681-812-255
                </p>
                <p className="text-gray-600 mt-3 text-sm">24/7 – Immediate assistance available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;