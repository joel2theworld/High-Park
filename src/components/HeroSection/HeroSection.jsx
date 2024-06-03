import React from "react";
import './HeroSection.css'

const HeroSection = ({ title, content }) => {
  return (
    <div className="heroSection">
      <div className="rectangle"></div>
      <div className="banner">
        <span className="title">{title}</span>
        <span className="content">{content}</span>
      </div>
    </div>
  );
};

export default HeroSection;
