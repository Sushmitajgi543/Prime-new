import {React,useEffect,useRef} from 'react'
import gsap from 'gsap';

import Header from '../../HomeHeader/Header'
import "./Homehero.scss"
function HomeHero() {
  const el = useRef();
    const q = gsap.utils.selector(el);
    const t1 = useRef();
    

    useEffect(() => {
      gsap.fromTo(".hero-section h1", { opacity: 0 }, {
       opacity: 1, duration: 1, delay: 0.3
      })
    
      gsap.fromTo("hr", { x: 300, opacity: 0 }, {
          x: 0, opacity: 1, duration: 2, ease: 'power1.inOut', delay: 0.3
      })
  })
  return (
    <div ref={t1} className='hero-section' >

        <Header/>
        <div className='hero-section-content'>

           <h1>We Build Great Homes</h1>
          </div>
       
    </div>
  )
}

export default HomeHero