import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import "./FooterSection.css";

function FooterSection() {
  return (
    <section className="footer-section">
      <div className="footer-links">
        <a href="#about">О НАС </a>
        <a href="#projects">ПРОЕКТЫ</a>
        <a href="#services">УСЛУГИ</a>
        <a href="#contacts">КОНТАКТЫ</a>
      </div>
      <Paragraph
        className="footer-text"
        text="студия дизайна интерьера Метрика — 2023"
      />
    </section>
  );
}

export default FooterSection;
