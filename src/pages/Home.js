import React from 'react'
import Footer from '../components/Footer/Footer'
import GreenFooter from '../components/Footer/GreenFooter'
import Header from '../components/Header/Header'
import ComingSoon from '../components/Home/ComingSoon/ComingSoon'
import HomeAbout from '../components/Home/HomeAbout/HomeAbout'
import HomeBenchmark from '../components/Home/HomeBenchmark/HomeBenchmark'
import HomeHero from '../components/Home/HomeHero/HomeHero'
import HomeProject from '../components/Home/HomeProject/HomeProject'
import Testimonial from '../components/Home/Testimonial/Testimonial'
import { gsap } from 'gsap';

function Home() {
  return (
    <div>
        <HomeHero/>
        <HomeProject/>
        <HomeAbout/>
        <HomeBenchmark/>
        <ComingSoon/>
        <Testimonial/>
        <GreenFooter/>
        <Footer/>
    </div>
  )
}

export default Home