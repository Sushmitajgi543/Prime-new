import {React,useRef,useEffect} from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import  gsap  from 'gsap';
import  Container  from '../../../components/Container/Container'
import "./Visionmission.scss"
import vision from '../../../assets/Image/vision.png';
import mission from '../../../assets/Image/mission.png';

function VisionMision() {

    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.vision-mission',
                start: 'center bottom'
            }
        })
            .fromTo(".vision-mission h1", { opacity: 0 }, {
               opacity: 1, duration: 3, 
            })

           
    })
  return (
    <div className='vision-mission'>

        <Container>
        <div className='vision-mission-content1'>
                    <span>
                        <img src={vision} alt="" />
                    </span>
                    <h1>OUR VISION</h1>

                    <p className='pre'>Loyal and resilient. Implementing tech towards 
                        future for better living standards.</p>
                    <p>We aspire to continually push the limits of
                        great finishing and craftsmanship.
                        </p>
                        <p>

                        We focus on offering you a better living,
                        we strive for continual progress in order
                        to establish ourselves as the most
                        trustworthy and reliable brand in real
                        estate while establishing the benchmark
                        of quality.</p>
                </div>


                <div className='vision-mission-content1'>
                <span>
                        <img src={mission} alt="" />
                    </span>
                    <h1>OUR MISSION</h1>
                    <p className="pre">You know you are at Prime when you get more than what you asked for.</p>
                    <p>We build designs that improve
                        neighborhoods by utilizing high-quality
                        materials that provide homes a longer
                        and more sustainable life.
                        </p>
                        <p>
                        Our customer-oriented designs are
                        functional and are implemented utilizing
                        cutting-edge technology to enable
                        hassle-free living.</p>
                </div>
        </Container>

    </div>
  )
}

export default VisionMision