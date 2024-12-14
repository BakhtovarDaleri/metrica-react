import React from "react";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import "./ContactSection.css";
// import "boxicons/css/boxicons.min.css";

function ContactSection() {
  return (
    <section id="contacts" className="contact-section">
      <div className="contact-icon">
        <img src="../../assets/Vektor.png" />
        {/* <box-icon name="mobile" color="#007bff" size="48px"></box-icon> */}

        <Heading className="contact-heading" level="h2" text="КОНТАКТЫ" />
        <Paragraph
          className="phone-contact"
          text={<a href="tel:+71234567890">+7 (123) 456-78-90</a>}
        />
        <Paragraph
          className="email-contact"
          text={<a href="mailto:hello@mail.com">hello@mail.com</a>}
        />
      </div>
    </section>
  );
}

export default ContactSection;
