import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <span className="high-park">HIGH PARK</span>
        <span className="architecture-interior-architecture">
          ARCHITECTURE + INTERIOR ARCHITECTURE
        </span>
      </div>
      <div className="menu">
        <NavLink exact to="/" className="menu-link" activeClassName="active">Home</NavLink>
        <NavLink to="/about-us" className="menu-link" activeClassName="active">About Us</NavLink>
        <NavLink to="/services" className="menu-link" activeClassName="active">Services</NavLink>
        <NavLink to="/projects" className="menu-link" activeClassName="active">Projects</NavLink>
      </div>
    </div>
  );
};

export default Header;
