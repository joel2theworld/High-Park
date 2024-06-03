import React from 'react'
import Header from '../../components/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Vm1 from "../../assets/vm1.png"
import Vm2 from "../../assets/vm2.png"
import Vm3 from "../../assets/vm3.png"
import Vm4 from "../../assets/vm4.png"

const Villam = () => {
  return (
    <div>
      <Header/>
      <HeroSection title="VILLA M" content="LAGOS, NIGERIA" />
      <div>
      <div className="trimnell-slide">
          <img src={Vm1}></img>
          <img src={Vm2} className="tl1"></img>
        </div>
        <p className="trim-text">
          Trimnell Tower is a luxury high rise development situated in the
          exclusive enclave of Victoria Island Lagos. The development is a
          radical and bold architectural statement on the Lagos skyline that
          seeks an innovative and ingenious approach to spatial organization in
          the context of high density. It recognizes its unique position at the
          center of a highly networked, high density urban condition but seeks
          to create a stylish and tranquil oasis for its residents. This
          dichotomy of conditions is expertly handled by a team of seasoned
          designers with a fantastic track record of delivering successful
          signature projects in the Lagos real estate scene. Residents interface
          the city through well crafted sweeping views afforded by its height
          and are provided with luxury amenities that help to maintain a sense
          of calm, promote well being and improve the living experience.
          Trimnell Tower is right for you and your family, while it offers
          investors an opportunity to receive high returns on their investments.
        </p>
        <div className="trimnell-slide-2">
          <img src={Vm3}></img>
          <img src={Vm4} className="tr3"></img>
          
        </div>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Villam
