import { React, useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import "./OurGoal.scss"
import Container from '../../Container/Container'
import Heading from '../../Heading/Heading'

function OurGoals() {
    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.our-goals',
                start: 'center bottom'
            }
        })
            .fromTo(".our-goals h1", { opacity: 0 }, {
               opacity: 1, duration: 3, 
            })

           
    })
    return (
        <div className='our-goals'>
            <Container>
                <Heading>OUR GOALS</Heading>
                
                <div className='our-goals-content'>
                    <div className='our-goals-content-left'>
                        <div></div>
                    </div>
                    <div className='our-goals-content-middle'>
                        <div className='our-goals-content-middle-1  star'>
                            <span>01</span>
                            <div>
                                <h1>LISTEN</h1>
                                <p>Listen to our customers, talk with
                                    honesty and be open to new ideas.</p>
                            </div>
                        </div>
                        <div className='our-goals-content-middle-2  star'>
                            <span>02</span>
                            <div>
                                <h1>BE HONEST</h1>
                                <p>Offer the best advice backed by proper
                                    experience and industry credentials.</p>
                            </div>
                        </div>
                        <div className='our-goals-content-middle-3  star'>
                            <span>03</span>
                            <div>
                                <h1>SERVICE</h1>
                                <p>We offer a true end-to-end product, using
                                    dedicated managers to look after one
                                    project from start to finish.</p>
                            </div>
                        </div>
                        <div className='our-goals-content-middle-4  star'>
                            <span>04</span>
                            <div>
                                <h1>MAINTAIN</h1>
                                <p>Maintain all our goals, maintain all our
                                    products and maintain our relationships
                                    with clients for life.</p>
                            </div>
                        </div>
                    </div>
                    <div className='our-goals-content-right'>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OurGoals