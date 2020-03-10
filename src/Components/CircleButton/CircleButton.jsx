import React from "react";
import "./circleButton.css";

const CircleButton = () => {
  const handleHover = value => {
    if (value === true) {
      document.getElementById("Circle-1").style.transform = "rotateX(180deg)";
      document.getElementById("Circle-2").style.transform = "rotateY(-180deg)";
    }
    if (value === false) {
      document.getElementById("Circle-1").style.transform = "rotateX(0deg)";
      document.getElementById("Circle-2").style.transform = "rotateY(0deg)";
    }
  };

  return (
    <div
      id="Circle-button-container"
      onMouseOver={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <div id="Circle-button-content">HOVER</div>
      <div id="Circle-1" />
      <div id="Circle-2" />
    </div>
  );
};

export default CircleButton;
