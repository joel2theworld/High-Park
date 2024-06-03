import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Jas1 from "../../assets/jas-1.png";
import Jas2 from "../../assets/jas-2.png";
import Jas3 from "../../assets/jas-3.png";
import Jas4 from "../../assets/jas-4.png";
import Jas5 from "../../assets/jas-5.png";
import Jas6 from "../../assets/jas-6.png";
import "./Jasmine.css";

const Jasmine = () => {
  return (
    <div>
      <Header />
      <HeroSection title="JASMINE VILLAS" content="IKOYI" />
      <div>
        <div className="jas-slide">
          <img src={Jas1} alt="Jasmine 1" />
          <img src={Jas2} alt="Jasmine 2" />
        </div>
        <p className="jas-text">
          When approached to design the Interior Architecture of these homes in
          this Ikoyi development, HIGH PARK sought to create distinct visual
          identities for each scheme.
          <ul>
            <li>Villa 1 boasts a double height living area which features a cluster of ring suspension lighting.</li>
            <li>The elevator shaft is a rough textured volume which runs through the four(4) levels of the home, revealing presence on every floor.</li>
            <li>Villa 2 features an elevated beautifully lit open plan living experience. The use of soft organic forms throughout the home is used to convey a sense of comfort and relaxation.</li>
          </ul>
          A neutral aesthetic with slight pops of rich color serves to enliven the schemes while maintaining a sense of calm and serenity.
        </p>
        <div className="jasminee-2">
          <img src={Jas3} alt="Jasmine 3" />
          <img src={Jas4}  alt="Jasmine 4" />
          <img src={Jas5} alt="Jasmine 5" />
          <img src={Jas6} alt="Jasmine 6" />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Jasmine;
