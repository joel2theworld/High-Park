import React from "react";
import "./Projects.css";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";

import Trimnell from "../../assets/trimnell.png";
import Jasmine from "../../assets/jasmine.png";
import Integrity from "../../assets/integrity.png";
import Ark from "../../assets/ark.png";
import Villam from "../../assets/villam.png";
import ATL from "../../assets/atl1.png"
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Header />
      <HeroSection title="HIGH PARK PROJECTS" content="LAGOS, NIGERIA" />
      <div className="projectz">
        <div className="projectzz">
          <Link to={"/projects/trimnell-tower"}>
            <div>
              <div className="projtitle">
                <p className="p-name">TRIMNELL TOWER</p>
                <p className="p-loc">VICTORIA ISLAND</p>
              </div>
              <img src={Trimnell} className="images" alt="Trimnell Tower" />
            </div>
          </Link>
          <Link to={"/projects/jasmine-villas"}>
            <div>
              <div className="projtitle">
                <p className="p-name">JASMINE VILLAS</p>
                <p className="p-loc">IKOYI</p>
              </div>
              <img src={Jasmine} className="images" alt="Jasmine Villas" />
            </div>
          </Link>
          <Link to={"/projects/integrity-tower"}>
            <div>
              <div className="projtitle">
                <p className="p-name">INTEGRITY TOWER</p>
                <p className="p-loc">LEKKI</p>
              </div>
              <img src={Integrity} className="images" alt="Integrity Tower" />
            </div>
          </Link>
        </div>
        <div className="projectzz">
          <Link to={"/projects/the-ark"}>
            <div>
              <div className="projtitle">
                <p className="p-name">THE ARK</p>
                <p className="p-loc">LEKKI</p>
              </div>
              <img src={Ark} className="images" alt="The Ark" />
            </div>
          </Link>
          {/* <Link to={"/projects/atlantic-nominees"}>
            <div>
              <div className="projtitle">
                <p className="p-name">ATLANTIC NOMINEES</p>
                <p className="p-loc">AJAH</p>
              </div>
              <img src={ATL} className="images" alt="Atlantic Nominees 01" />
            </div>
          </Link> */}
          <Link to={"/projects/villa-m"}>
            <div>
              <div className="projtitle">
                <p className="p-name">VILLA M </p>
                <p className="p-loc">LAGOS</p>
              </div>
              <img src={Villam} className="images" alt="Villa M" />
            </div>
          </Link>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Projects;
