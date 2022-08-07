import {React,useRef,useEffect} from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  gsap  from 'gsap';
import Container from '../../Container/Container'
import Heading from '../../Heading/Heading'
import "./Homebenchmark.scss"
import quality from "../../../assets/Image/quality.png";
import trust from "../../../assets/Image/trust.png";
import commintment from "../../../assets/Image/commintment.png";
import excellence from "../../../assets/Image/excellence.png";

function HomeBenchmark() {
    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.home-benchmark',
                start: 'center bottom'
            }
        })
            .fromTo(".home-benchmark h1", { opacity: 0 }, {
               opacity: 1, duration: 1.5, 
            })

            .fromTo(".home-benchmark p    ", { opacity: 0 },
                { opacity: 1, duration: 1 });

    })
    return (
        <div className='home-benchmark'>
            <Container>
                <div className="home-benchmark-title">
                    <Heading>
                        OUR BENCHMARKS
                    </Heading>
                </div>
                <div className="home-benchmark-content">
                    <div className="home-benchmark-content-left">

                        <div className="home-benchmark-content-left-content">

                            <div className="home-benchmark-content-left-content-item1">
                                <div className="home-benchmark-content-left-content-item1-box1">
                                    <div>
                                        <img src={quality} alt="" />

                                    </div>
                                    <h4>Quality</h4>
                                    <p>Using the highest quality materials to ensure the
                                        longevity of your homes.</p>
                                </div>
                                <div className="home-benchmark-content-left-content-item1-box2">
                                    <div>
                                        <img src={trust} alt="" />

                                    </div>
                                    <h4>Trust</h4>
                                    <p>Best use of the latest technology to provide a
                                        hassle-free lifestyle.</p>
                                </div>
                            </div>
                            <div className="home-benchmark-content-left-content-item2">
                                <div className="home-benchmark-content-left-content-item1-box1">
                                    <div>
                                        <img src={commintment} alt="" />

                                    </div>
                                    <h4>Commitment</h4>
                                    <p>Living the commitment, delivering the promises.
                                        With us, you always get more than you asked for.</p>
                                </div>
                                <div className="home-benchmark-content-left-content-item1-box2">
                                    <div>
                                        <img src={excellence} alt="" />

                                    </div>
                                    <h4>Excellence</h4>
                                    <p>Our proven track record of delivery paired with
                                        innovative architecture has helped us gain the
                                        distinction of developer-par-excellence.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="home-benchmark-content-right">
                        
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default HomeBenchmark