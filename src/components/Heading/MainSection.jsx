import React from "react";
import backgroundImage from "../../assets/Rectangle.png";

function MainSection(props) {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={cardStyle} className="main-section">
      <p className="corner-label">{props.text}</p>
    </div>
  );
}

export default MainSection;
