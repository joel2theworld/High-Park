import React from "react";
import "./Home.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import arrow from "../../assets/arrow.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection title="A NEW PARADIGM FOR ARCHITECTURAL DESIGN" />
      <div className="home"></div>
      <div className="homePic"></div>
      <div className="about">
        <div className="about-pic"></div>
        <div className="container-6">
          <div className="about-us-page">About Us</div>
          <div className="welcome-to-high-park-architecture-we-specialize-in-delivering-comprehensive-end-to-end-architecture-and-project-management-solutions-our-mission-is-to-transform-spaces-into-captivating-environments-that-inspire-and-enhance-the-lives-of-those-who-inhabit-them-at-high-park-we-take-pride-in-our-meticulous-approach-to-every-project-ensuring-excellence-from-conception-to-completion-heres-how-we-operate">
            Welcome to High Park Architecture. We specialize in delivering
            comprehensive end-to-end architecture and project management
            solutions. Our mission is to transform spaces into captivating
            environments that inspire and enhance the lives of those who inhabit
            them.
            <br />
            <br />
            At High Park, we take pride in our meticulous approach to every
            project, ensuring excellence from conception to completion.
            Here&#39;s how we operate:
            <br />
            <br />
            <br />
          </div>
          <Link to={`/about-us`} style={{ textDecoration: "none" }}>
            <div className="group-233">
              <span className="read-more-2">Read More</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="container-5">
        <div className="services">
          <div className="container-10">
            <div className="high-park-services">HIGH PARK SERVICES</div>
            <div className="high-park-specialize-in-delivering-exceptional-architectural-and-interior-design-solutions-with-meticulous-attention-to-detail-and-afocus-on-client-satisfaction-we-offer-comprehensive-services-like">
              High Park specialize in delivering exceptional architectural and
              interior design solutions. With meticulous attention to detail and
              a focus on client satisfaction, we offer comprehensive services
              like:
            </div>
            <div className="architecture-design-interior-design-ff-efixtures-furniture-equipment-contracting-project-management">
              <li>Architecture Design</li>
              <li>Interior Design</li>
              <li>
                FF&amp;E (Fixtures, Furniture &amp; Equipment Contracting)
              </li>
              <li>Project Management</li>
            </div>
            <Link to={`/services`} style={{ textDecoration: "none" }}>
              <div className="group-23">
                <span className="read-more">Read More</span>
              </div>
            </Link>
          </div>
          <div className="rectangle-16"></div>
          <div className="rectangle-17"></div>
        </div>
      </div>
      <Contact />
      <div className="all-projects">
        <div className="our-projects">Our Projects</div>
        <div className="our-designs-projects-that-we-have-elavated-on-by-our-best-architects">
          Our designs &amp; projects executed by our best
          architects.
        </div>
        <div className="container-8">
          <div className="rectangle-19">
            <img
              className="vector-1"
              src="assets/vectors/Vector1_x2.svg"
              alt=""
            />
          </div>
          <div className="container-13">
            <div className="rectangle-20"></div>
            <div className="rectangle-21"></div>
          </div>
          <div className="rectangle-22">
            <span className="see-more-projects">See More Projects</span>
            <Link to={`/projects`} style={{ textDecoration: "none" }}>
              <img className="vector" src={arrow} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
