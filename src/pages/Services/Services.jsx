import React from "react";
import "./Services.css";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import Banner from "../../assets/banner.png";

const Services = () => {
  return (
    <div>
      <Header />
      <HeroSection title="HIGH PARK SERVICES" />
      <img src={Banner} className="banner"></img>
      <div className="fullservices">
        {/* <div className="ourservices">Our Services</div> */}
        <p className="servicetext">
          1. <b>Architecture Design: </b>
          <br></br>High Park offers comprehensive architectural design services.
          Our team of skilled architects works closely with clients to
          conceptualize, plan, and design structures that are functional,
          aesthetically pleasing, and aligned with the client's vision and
          requirements. This service may include site analysis, conceptual
          design, schematic design, design development, construction
          documentation, and architectural visualization. <br></br>
          <br></br>
          2.<b> Interior Design:</b> <br></br>High Park specializes in creating
          captivating interior spaces that harmonize with the architecture and
          meet the functional needs of our clients. Our interior design services
          cover a wide range of areas including residential, commercial,
          hospitality, and institutional spaces. This includes space planning,
          material selection, furniture layout, lighting design, color
          coordination, and overall aesthetic direction. High Park's interior
          design solutions focus on enhancing the user experience while
          reflecting the client's personality and brand identity. <br></br>
          <br></br>
          3. <b>FF&E (Fixtures, Furniture & Equipment) Contracting:</b>{" "}
          <br></br>
          High Park manages the procurement and installation of fixtures,
          furniture, and equipment for their clients' projects. With an
          extensive network of vendors in Europe, Asia and Africa, we source
          high-quality FF&E items that align with the project's design concept
          and budget. This service includes coordinating with suppliers,
          managing logistics, ensuring timely delivery, and overseeing
          installation to ensure that every element meets the desired standards
          of quality and design. <br></br>
          <br></br>
          4. <b>Project Management:</b>
          <br></br>
          High Park offers comprehensive project management services to oversee
          every aspect of the project from inception to completion. Our
          experienced project managers coordinate with architects, designers,
          contractors, and other stakeholders to ensure seamless execution,
          timely delivery, and adherence to budget and quality standards. This
          includes project planning, scheduling, budget management, risk
          mitigation, quality control, and communication with all parties
          involved. High Park's project management approach is tailored to the
          specific needs of each project, ensuring efficient and successful
          outcomes.<br></br>
          <br></br>
          By providing these integrated services, High Park offers clients a
          holistic approach to architectural and interior design projects,
          delivering exceptional results while minimizing complexity and
          ensuring a cohesive design vision throughout the entire process.
        </p>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Services;
