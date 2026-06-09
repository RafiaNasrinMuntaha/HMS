import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import ScrollToTop from "../components/common/ScrollToTop";
// Pages
import HomePage from "../pages/public/HomePage"; // ADD THIS
import AboutPage from "../pages/public/AboutPage";
import AppointmentPage from "../pages/public/AppointmentPage";
import DoctorsPage from "../pages/public/DoctorsPage";
import DoctorProfilePage from "../pages/public/DoctorProfilePage";
import ServicesPage from "../pages/public/ServicesPage";
import NewsPage from "../pages/public/NewsPage";
import NewsDetailPage from "../pages/public/NewsDetailPage";
import ContactPage from "../pages/public/ContactPage";

export default function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} /> {/* CHANGE THIS */}
          <Route path="about" element={<AboutPage />} />
          <Route path="specialties" element={<ServicesPage />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="doctors/:id" element={<DoctorProfilePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:id" element={<NewsDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="appointment" element={<AppointmentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
