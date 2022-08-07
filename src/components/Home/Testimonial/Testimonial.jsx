import {React,useRef,useEffect} from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  gsap  from 'gsap';
import ".//Testimonial.scss"
import Container from '../../Container/Container'
import quotation from '../../../assets/Image/quotation.png';
import Heading from '../../Heading/Heading';

function Testimonial() {
    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.testimonial',
                start: 'center bottom'
            }
        })
            .fromTo(".testimonial h1", { opacity: 0 }, {
               opacity: 1, duration: 1.5, 
            })

            .fromTo(".testimonial h3 ", { opacity: 0 },
                { opacity: 1, duration: 1 });

    })
    return (
        <div className='testimonial' >
            <Container>
                <Heading>TESTIMONIALS</Heading> 
                <div className='testimonial-content'>
                    <div className='testimonial-content-left'>
                        <span>
                            <img src={quotation} alt="" />
                        </span>
                        <div>
                            <h3>Lorem ipsum dolor sit amet, adipiscing elit, sed diam
                                nonummy nibh euismod tincidunt ut laoreet dolore
                                magna</h3>
                            <p>Lorem Ipsum, Lorem Ipsum Dolor</p>
                        </div>
                    </div>
                    <div className='testimonial-content-right'>
                        <span><img src={quotation} alt="" /></span>
                        <div>
                            <h3>Lorem ipsum dolor sit amet, adipiscing elit, sed diam
                                nonummy nibh euismod tincidunt ut laoreet dolore
                                magna</h3>
                            <p>Lorem Ipsum, Lorem Ipsum Dolor</p>
                        </div>



                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testimonial