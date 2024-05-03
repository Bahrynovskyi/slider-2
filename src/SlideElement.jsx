import React from "react";

const SlideElement = ({ header, image, text, moveLeft, moveRight }) => {
  return (
    <div className={`slider-item`}>
      <h2>{header}</h2>
      <div className={`slider-img`}>
        <img src={image} alt="" width="200px" height="200px" />
        <span className="slider-text-bg"></span>
        <span className="slider-text">{text}</span>
      </div>
    </div>
  );
};

export default SlideElement;
