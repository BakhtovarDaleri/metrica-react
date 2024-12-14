import React from "react";

function MainSection({
  text,
  className = "",
  backgroundImage,
  textStyleClass = {},
}) {
  return (
    <div
      className={`main-section ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className={textStyleClass}>{text}</p>
    </div>
  );
}

export default MainSection;
