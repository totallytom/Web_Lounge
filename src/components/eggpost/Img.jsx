import React from "react";
import "./img.css";

function Img() {
  return (
    <div className="imageHolder">
      <img
        className="imgRounded"
        src="https://picsum.photos/200"
        alt="Any Random"
      />
    </div>
  );
}

export default Img;
