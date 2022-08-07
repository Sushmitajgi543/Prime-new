import {React,useRef,useEffect} from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  gsap  from 'gsap';
import "./HeroSection.scss"
import circle from "../../../assets/Image/circle.png"
function HeroSection() {

    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            
        })
            .fromTo(".abt-hero-section h1", { opacity: 0 }, {
               opacity: 1, duration: 1.5, 
            })

            
    })
    return (
        <div className="abt-hero-section">
            <div className="abt-hero-section-left">

                <div className="abt-hero-section-left-content">

                </div>
            </div>
            <div className="abt-hero-section-right">
                <h1>RE
                    <span>
                        <img src={circle} alt="" />
                    </span>
                    DEFINING EXPERIENCES</h1>
            </div>
        </div>
    )
}

export default HeroSection