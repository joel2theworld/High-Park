import React from "react";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Ark1 from "../../assets/ark1.png";
import Ark2 from "../../assets/ark2.png";
import Ark3 from "../../assets/ark3.png";
import Ark4 from "../../assets/ark4.png";
import "./Ark.css"
const Ark = () => {
  return (
    <div>
      <Header />
      <HeroSection title="THE ARK" content="LEKKI" />
      <div>
        <div className="trimnell-slide">
          <img src={Ark1}></img>
          <img src={Ark2} className="tl1"></img>
        </div>
        <p className="trim-text">
          As Architect + Interior Architect, HIGH PARK was tasked by the
          client’s brief to create a ‘boutique living experience.’ The
          development is situated in the upmarket Lekki Neighborhood and
          delivers a sense of ‘savoir vivre’ - the ability to live elegantly.
          THE ARK is a sanctuary of contemporary living Comprising four(4)
          triplexes and two(2) penthouses.{" "}
          <li>
            Generous living areas spill onto expansive perimeter loggia,
            encouraging entertainment and enjoyment of the tropical seasons.{" "}
          </li>{" "}
          <li>
            The living areas are elevated above the street level via a
            sculptural staircase which runs through the triplexes.
          </li>
          <li>
            Two dramatic penthouses are perched above, with loggias stretching
            the entire width of the units and crowned with a dramatic
            cantilevered deck above.
          </li>{" "}
          This gem of a living space with it’s high ceilings, walls of folding
          glass doors and wide panorama conveys the opulence of a Manhattan
          Penthouse, right in the heart of Lagos!
        </p>
        <div className="arkcity">
          <img src={Ark3}></img>
          <img src={Ark4} className=""></img>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Ark;
