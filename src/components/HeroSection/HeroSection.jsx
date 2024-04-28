import React from "react";
import './HeroSection.css'
const HeroSection = ({ title, content }) => {
  return (
    <div className="heroSection">
      <div className="rectangle-151"></div>
      <div className="banner">
        <span className="anew-paradigm-for-architectural-designs">{title}</span>
        <span className="subtitle">{content}</span>
      </div>
    </div>
  );
};

export default HeroSection;
