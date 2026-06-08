import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import DoctorsPage from "../pages/public/DoctorsPage";
import DoctorProfilePage from "../pages/public/DoctorProfilePage";
import ServicesPage from "../pages/public/ServicesPage";

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
            element={<div className="p-10 text-center">About Page Section</div>}
          />
          <Route path="services" element={<ServicesPage />} />
          <Route
            path="doctors"
            element={<DoctorsPage />}
          />
          <Route path="doctors/:id" element={<DoctorProfilePage />} />
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
            element={
              <div className="p-10 text-center">Booking Form Section</div>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
