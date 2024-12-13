import React from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import "./About.css";

function AboutSection() {
  return (
    <div className="about-section">
      <Heading level="h2" text="О НАС" />
      <Paragraph
        className="highlighted"
        text="Студия основана в 2011 году. Полностью отдаемся проектированию и
        реализации интерьеров. К нам обращаются за уютом, индивидуальными
        решениями и практичностью. Находим конструктивные решения для каждого
        интерьера, вплоть до каждой детали — нацелены на результат."
      />
      <Button className="primary-button" text="Посмотреть услуги" />
    </div>
  );
}

export default AboutSection;
