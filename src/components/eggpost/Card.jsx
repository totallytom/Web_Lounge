import React from "react";
import { useState } from "react";
import "./card.css";
// Our Website Components
import Img from "./Img.jsx";
import Title from "./Title.jsx";
import Description from "./Description.jsx";

//Main Function
function Card() {
  // For Mouse Hover Effect of Play button.
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
   <div className="Container">
    <div
      className="songCard"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Img />
      <Title />
      <Description />
    </div>
  </div>  
  );
}

export default Card;

