import React from "react";
import Heading from "../Heading/Heading";
import "./HeroSection.css";
import MainSection from "../Heading/MainSection";
import backgroundImage from "../../assets/Rectangle.png";

function HeroSection() {
  return (
    <div className="hero-section">
      <Heading
        level="h1"
        text="Современные и стильные интерьеры для комфортной жизни"
      />
      <MainSection
        text="Мы - команда квалифицированных дизайнеров и архитекторов, занимающихся разработкой и реализацией дизайн-проектов"
        backgroundImage={backgroundImage}
        textStyleClass="hero-text"
      />
    </div>
  );
}

export default HeroSection;
