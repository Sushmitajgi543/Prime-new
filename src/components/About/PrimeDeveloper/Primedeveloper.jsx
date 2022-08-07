import {React,useRef,useEffect} from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  gsap  from 'gsap';
import Container from '../../Container/Container'
import Heading from '../../Heading/Heading'
import "./Primedeveloper.scss"
function Primedeveloper() {
    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.Prime-developer',
                start: 'center bottom'
            }
        })
            .fromTo(".Prime-developer h1", { opacity: 0 }, {
               opacity: 1, duration: 3, 
            })

           
    })

    return (
        <div className='Prime-developer'>

            <Container>
            <div className='Prime-developer-left'>
                <Heading> PRIME DEVELOPERS</Heading>
                <p>Prime wants to build beautiful homes
                    that connect people with their spaces
                    meaningfully and comfortably.</p>
            </div>
            <div className='Prime-developer-right'>
               
           </div>
            </Container>
        </div>
    )
}

export default Primedeveloper