import React from "react";

function Paragraph({ text, className = "", style = {} }) {
  return (
    <p className={`paragraph ${className}`} style={style}>
      {text}
    </p>
  );
}
export default Paragraph;
