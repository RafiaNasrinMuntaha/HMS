import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import ScrollToTop from "../components/common/ScrollToTop";

// Public Pages (Located in components/pages)
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import AppointmentPage from "../components/pages/AppointmentPage";
import DoctorsPage from "../components/pages/DoctorsPage";
import DoctorProfilePage from "../components/pages/DoctorProfilePage";
import ServicesPage from "../components/pages/ServicesPage";
import NewsPage from "../components/pages/NewsPage";
import NewsDetailPage from "../components/pages/NewsDetailPage";
import ContactPage from "../components/pages/ContactPage";

// Auth Pages (Located in components/auth)
import LoginPage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";

// Dashboard Components (Located in components/dashboard)
import PatientDashboard from "../components/dashboard/patient/PatientDashboard";
import AdminDashboard from "../components/dashboard/admin/AdminDashboard";

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes with Shared Layout (Navbar, Footer, etc.) */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="specialties" element={<ServicesPage />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="doctors/:id" element={<DoctorProfilePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:id" element={<NewsDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="appointment" element={<AppointmentPage />} />
        </Route>

        {/* Auth Routes (Standalone Pages without Public Layout) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Patient Routes (Standalone Pages without Public Layout) */}
        <Route path="/patient/dashboard" element={<PatientDashboard />} />

        {/* Admin Routes (Standalone Pages without Public Layout) */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
