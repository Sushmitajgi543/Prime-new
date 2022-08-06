import React from 'react'
import FormSection from '../components/Contact/FormSection/FormSection'
import GetInTouch from '../components/Contact/GetInTouch/GetInTouch'
import HeroSection from '../components/Contact/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function Contact() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FormSection/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}

export default Contact