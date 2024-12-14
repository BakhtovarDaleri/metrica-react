import React from "react";
import "./ImgWithTextSection.css";
import MainSection from "../Heading/MainSection";
import backgroundImage from "../../assets/landing.png";

function ImgWithTextSection() {
  return (
    <div className="image-with-text-section">
      <MainSection
        text="Проект  Двухкомнтаной квартиры в ЖК Лесной Пейзаж"
        backgroundImage={backgroundImage}
        className="hero-image-section"
        textStyleClass="custom-text"
      />
    </div>
  );
}

export default ImgWithTextSection;
