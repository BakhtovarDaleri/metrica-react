import React from "react";
import "./ServiceCard.css";

function ServiceCard(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <p className="service-card-text">
        {props.title} — от {props.cost}/м²
      </p>
    </div>
  );
}

export default ServiceCard;
