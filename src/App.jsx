import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import BannerSection from "./components/BannerSection/BannerSection";

function App() {
  return (
    <div className="container">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <BannerSection />
    </div>
  );
}

export default App;
