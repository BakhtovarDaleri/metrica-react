import React from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import "./About.css";

function AboutSection() {
  // Функция для прокрутки к секции "Услуги"
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services"); // Находим секцию по id
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth", // Плавная прокрутка
        block: "start", // Прокрутка начинается с верхней части секции
      });
    }
  };

  return (
    <div id="about" className="about-section">
      <Heading level="h2" text="О НАС" />
      <Paragraph
        className="highlighted"
        text="Студия основана в 2011 году. Полностью отдаемся проектированию и реализации интерьеров. К нам обращаются за уютом, индивидуальными решениями и практичностью. Находим конструктивные решения для каждого интерьера, вплоть до каждой детали — нацелены на результат."
      />
      <Button
        className="primary-button"
        text="Посмотреть услуги"
        onClick={scrollToServices} // Вешаем обработчик для прокрутки
      />
    </div>
  );
}

export default AboutSection;
