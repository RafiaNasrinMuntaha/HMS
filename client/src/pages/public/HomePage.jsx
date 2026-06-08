import HeroSection from "../../components/home/HeroSection";
import WelcomeSection from "../../components/home/WelcomeSection";
import Specialties from "../../components/home/Specialties";
import ServicesSection from "../../components/home/ServicesSection";
import DoctorsCarousel from "../../components/home/DoctorsCarousel";
import NewsGrid from "../../components/home/NewsGrid";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <Specialties />
      <ServicesSection />
      <DoctorsCarousel />
      <NewsGrid />
    </div>
  );
}
