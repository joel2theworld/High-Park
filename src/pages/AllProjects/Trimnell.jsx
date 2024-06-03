import React from "react";
import "./Trimnell.css";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Trimnell1 from "../../assets/trimnell-1.png";
import Trimnell2 from "../../assets/trimnell-2.png";
import Trimnell3 from "../../assets/trimnell-3.png";
import Trimnell4 from "../../assets/trimnell-4.png";
import Trimnell5 from "../../assets/trimnell-5.png";

const Trimnell = () => {
  return (
    <div>
      <Header />
      <HeroSection title="TRIMNELL TOWER" content="VICTORIA ISLAND" />
      <div className="trimnell-container">
        <div className="trimnell-slide">
          <img src={Trimnell1} alt="Trimnell Slide 1" />
          <img src={Trimnell2} alt="Trimnell Slide 2" className="tl1" />
        </div>
        <p className="trim-text">
          Trimnell Tower is a luxury high-rise development situated in the
          exclusive enclave of Victoria Island, Lagos. The development is a
          radical and bold architectural statement on the Lagos skyline that
          seeks an innovative and ingenious approach to spatial organization in
          the context of high density. It recognizes its unique position at the
          center of a highly networked, high-density urban condition but seeks
          to create a stylish and tranquil oasis for its residents. This
          dichotomy of conditions is expertly handled by a team of seasoned
          designers with a fantastic track record of delivering successful
          signature projects in the Lagos real estate scene. Residents interface
          the city through well-crafted sweeping views afforded by its height
          and are provided with luxury amenities that help to maintain a sense
          of calm, promote well-being, and improve the living experience.
          Trimnell Tower is right for you and your family, while it offers
          investors an opportunity to receive high returns on their investments.
        </p>
        <div className="trimnell-slide-2">
          <img src={Trimnell3} alt="Trimnell Slide 3" className="tr3"/>
          <img src={Trimnell5} alt="Trimnell Slide 5" className="tr5" />
          <img src={Trimnell4} alt="Trimnell Slide 4" className="tr4" />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Trimnell;
