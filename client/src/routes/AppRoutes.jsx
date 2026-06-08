import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import AboutPage from '../pages/public/AboutPage';
import AppointmentPage from '../pages/public/AppointmentPage';

// Inline simple landing test component
const HomeTest = () => (
  <div className="py-20 text-center bg-gray-50">
    <h2 className="text-3xl font-bold font-heading text-primary">
      Welcome to MediCore
    </h2>
    <p className="text-gray-600 mt-2">
      The main page content area compiles here.
    </p>
  </div>
);

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Public Routes wrapping our Layout */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomeTest />} />
          <Route
            path="about"
            element={<AboutPage />}          // <<<< CHANGE HERE
          />
          <Route
            path="services"
            element={
              <div className="p-10 text-center">Services Page Section</div>
            }
          />
          <Route
            path="doctors"
            element={
              <div className="p-10 text-center">Doctors Grid Section</div>
            }
          />
          <Route
            path="news"
            element={
              <div className="p-10 text-center">News Archive Section</div>
            }
          />
          <Route
            path="contact"
            element={
              <div className="p-10 text-center">Contact Form Section</div>
            }
          />
           <Route
            path="appointment"
            element={<AppointmentPage />}    // <<<< CHANGE HERE
          />
         
        </Route>
      </Routes>
    </Router>
  );
}
