import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Int1 from "../../assets/integrity-1.png"
import Int2 from "../../assets/integrity-2.png"
import Int3 from "../../assets/integrity-3.png"
import Int4 from "../../assets/integrity4.png"
import Int5 from "../../assets/integrity-5.png"
import "./Integrity.css"

const Integrity = () => {
  return (
    <div>
      <Header />
      <HeroSection title="INTEGRITY TOWER" content="LEKKI" />
      <div>
        <div className="int-slide">
          <img src={Int1}></img>
          <img src={Int2} className="tl1"></img>
        </div>
        <p className="int-text">
          Integrity Tower is a contemporary statement on the Lekki skyline,
          which soars uniquely in a class of its own. With HIGH PARK engaged as
          Architect + Interior Architect, we set out to create a modern, yet
          stylish design. Geometric lines and curves are masterfully composed
          into a uniquely identifiable landmark which recapitulates and
          confounds to the stylish Art Nouveau Era. Minimal yet fashionably
          elegant and sophisticated, Integrity Tower aims for a balance between
          pared back barefoot luxury and elegant living. A skillful combination
          of earth tones, neutral fabrics and metallic accents and abundant day
          lighting enhance the feeling of comfort and tranquility in the
          interior spaces.
        </p>
        <div className="int-slide-2">
          <img src={Int3}></img>
          <img src={Int4}></img>
          <img src={Int5}></img>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Integrity;
