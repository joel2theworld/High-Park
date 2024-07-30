import React from 'react'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Atl1 from '../../assets/atl1.png'
import Atl2 from '../../assets/atl2.png'
import "./AtlanticNominees.css"
const AtlanticNominees = () => {
  return (
    <div>
      <Header/>
      <HeroSection title="ATLANTIC NOMINEES" content="AJAH, LAGOS" />
      <div>
      <div className="atl-slide">
          <img src={Atl1}></img>
          <img src={Atl2}></img>
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default AtlanticNominees
