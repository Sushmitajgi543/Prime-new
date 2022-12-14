import {React,useRef,useEffect} from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  gsap  from 'gsap';
import Container from '../../Container/Container'
import projectImg from '../../../assets/Image/project-img.png';
import "./HeroSection.scss"
function HeroSection() {
    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            
        })
            .fromTo(".pjt-hero-section h1", { opacity: 0 }, {
               opacity: 1, duration: 2, 
            })

           
    })
    return (
        <div className='pjt-hero-section'>

            <Container className="pjt-hero-section-left">
                <div className="pjt-hero-section-left-top">
                    <img src={projectImg} alt="" />
                </div>
                <div className="pjt-hero-section-left-middle">
                    <div>
                        <p>4BHK</p>
                        <p>42 Units</p>
                    </div>
                    <div>
                        <p>3BHK </p>
                        <p>44 Units</p>
                    </div>
                    <div>
                        <p>PENTHOUSE</p>
                        <p>04 Units</p>
                    </div>
                    <div>
                        <p>RETAIL </p>
                        <p>18 Units</p>
                    </div>
                </div>
                <div className="pjt-hero-section-left-bottom">
                    <h2>RE-DEFINING
                        EXPERIENCES.</h2>
                </div>

            </Container>
            <div className="pjt-hero-section-right">
                <div className="pjt-hero-section-right-top">
                    <h1>INTRODUCING A<br></br>
                        GREEN WAY OF LIVING.</h1>
                </div>
                <div className="pjt-hero-section-right-bottom">

                </div>
            </div>

        </div>
    )
}

export default HeroSection