import React from "react";

function ServiceCard(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <p>
        {props.title} — {props.text} {props.cost}/м²
      </p>
    </div>
  );
}

export default ServiceCard;
