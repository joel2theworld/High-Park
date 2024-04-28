import React from 'react'
import './Projects.css'
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';


const Projects = () => {
  return (
    <div>
      <Header />
      <HeroSection title="HIGH PARK PROJECTS" content="LAGOS, NIGERIA" />
      <div className="allprojects">Projects</div>
    </div>
  );
}

export default Projects