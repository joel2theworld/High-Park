import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="c1">
        <span className="hp">HIGH PARK</span>
        <span className="arch">ARCHITECTURE + INTERIOR ARCHITECTURE</span>
        <p className="para">
          A NEW PARADIGM FOR <br /> ARCHITECTURAL <br /> DESIGN
        </p>
      </div>
      <div className="c2">
        <span className="cntct">Contact Us</span>
        <div className="contac">
          <div className="tell">
            <b>Tel: </b>+2348156309890
          </div>
          <div className="email">
            <b>Email: </b>dolapofadipe@highpark.in
          </div>
          <div className="address">
            <b>Address: </b>20 Omole Phase 2 Extension, <br /> 100214, Lagos, Nigeria.
          </div>
        </div>
      </div>
      <div className="c3">
        <span className="menulink">Menu</span>
        <div className="menu-items">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="homelink">Home</span>
          </Link>
          <Link to="/about-us" style={{ textDecoration: "none" }}>
            <span className="about-us-1">About Us</span>
          </Link>
          <Link to="/services" style={{ textDecoration: "none" }}>
            <span className="servicelink">Services</span>
          </Link>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <span className="projectslink">Projects</span>
          </Link>
        </div>
      </div>
      <div className="c4">
        <span className="social">Socials</span>
        <div className="social-items">
          <a href="https://instagram.com/highpark.in" style={{ textDecoration: "none" }}>
            Instagram <br />
          </a>
          <a href="https://linkedin.com/highpark-in" style={{ textDecoration: "none" }}>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;


