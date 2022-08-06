import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import GreenFooter from '../components/Footer/GreenFooter'
import Herosection from '../components/Projects/HeroSection/HeroSection'
import Banner from '../components/Projects/BannerSection/Banner'
import StunningSection from '../components/Projects/StunningSection/StunningSection'
import GallerySection from '../components/Projects/GallerySection/GallerySection'

function Projects() {
  return (
    <div>
        <Header/>
        <Herosection/>
        <GallerySection/>
        <StunningSection/>
        <Banner/>
        <GreenFooter/>
        <Footer/>
    </div>
  )
}

export default Projects