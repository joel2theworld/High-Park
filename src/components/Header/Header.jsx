import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <span className="high-park">HIGH PARK</span>
        <span className="architecture-interior-architecture">
          ARCHITECTURE + INTERIOR ARCHITECTURE
        </span>
      </div>
      <div className="menu">
        <Link to={`/`} style={{ textDecoration: "none" }}>
          <span className="home">Home</span>
        </Link>
        <Link to={`/about-us`} style={{ textDecoration: "none" }}>
          <span className="about-us">About Us</span>
        </Link>
        <Link to={`/services`} style={{ textDecoration: "none" }}>
          <span className="service">Services</span>
        </Link>
        <Link to={`/projects`} style={{ textDecoration: "none" }}>
          <span className="projects">Projects</span>
        </Link>
      </div>
    </div>
  );
}
