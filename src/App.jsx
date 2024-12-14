import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ImgWithTextSection from "./components/ImgWithTextSection/ImgWithTextSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FooterSection from "./components/FooterSection/FooterSection";

function App() {
  return (
    <div className="container">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ImgWithTextSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
