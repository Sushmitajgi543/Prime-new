import {React,useRef,useEffect} from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  gsap  from 'gsap';
import "./Homeabout.scss"
import Container from '../../Container/Container'
import { Link } from 'react-router-dom';
function HomeAbout() {

    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-about',
                start: 'center bottom'
            }
        })
            .fromTo(".home-about h1", { opacity: 0 }, {
               opacity: 1, duration: 1.5, 
            })

            .fromTo(".home-about p    ", { opacity: 0 },
                { opacity: 1, duration: 1.5 });

    })
    return (
        <div className='home-about'>
            <Container>
               
                    <div className="home-about-left">
                        <h1>ABOUT US . </h1>
                    </div>
                    <div className="home-about-right">
                        <h3>Trustworthy, reliable & passionate
                            about quality. We are guided by the
                            conviction that our customers must
                            be happy and satisfied.</h3>
                        <Link to="/about-us">Explore More&nbsp; &rarr;</Link>
                    </div>
           
            </Container>
        </div>
    )
}

export default HomeAbout