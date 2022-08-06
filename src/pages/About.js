import React from 'react'
import HeroSection from '../components/About/HeroSection/HeroSection'
import OurGoals from '../components/About/OurGoals/OurGoals'
import Primedeveloper from '../components/About/PrimeDeveloper/Primedeveloper'
import Success from '../components/About/Success/Success'
import VisionMision from '../components/About/Vision/VisionMision'
import Footer from '../components/Footer/Footer'
import GreenFooter from '../components/Footer/GreenFooter'
import Header from '../components/Header/Header'

function About() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <VisionMision></VisionMision>
      <Primedeveloper/>
      <OurGoals/>
      <Success/>
      <GreenFooter/>
      <Footer/>
    </div>
  )
}

export default About