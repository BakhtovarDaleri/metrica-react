import React from "react";
import Heading from "../Heading/Heading";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./ServicesSection.css";
import service1Img from "../../assets/service1.png";
import service2Img from "../../assets/service2.png";
import service3Img from "../../assets/service3.png";
import service4Img from "../../assets/service4.png";

const services = [
  {
    title: "Планирование решение",
    cost: "2500р",
    link: "/service1",
    image: service1Img,
  },
  {
    title: "Дизайн-проекта",
    cost: "3000р",
    link: "/service2",
    image: service2Img,
  },
  {
    title: "Авторский надзор",
    cost: "2800р",
    link: "/service3",
    image: service3Img,
  },
  {
    title: "Комплектация",
    cost: "4800р",
    link: "/service4",
    image: service4Img,
  },
];

function ServicesSection() {
  return (
    <div id="services" className="services-section">
      <Heading level="h2" text="УСЛУГИ" />

      {services.map(function (service) {
        return (
          <ServiceCard
            key={service.link}
            title={service.title}
            cost={service.cost}
            link={service.link}
            image={service.image}
          />
        );
      })}
    </div>
  );
}

export default ServicesSection;
