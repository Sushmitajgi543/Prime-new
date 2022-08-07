import { React, useRef, useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import "./Formsection.scss"
import contactpattern from '../../../assets/Image/contact-pattern.png';

function FormSection() {

    gsap.registerPlugin(ScrollTrigger);
    const eleRef = useRef();
    const t1 = useRef();
    const q = gsap.utils.selector(eleRef);
    useEffect(() => {
        t1.current = gsap.timeline({
            scrollTrigger: {
                trigger: '.form-section',
                start: 'center bottom'
            }
        })
            .fromTo(".form-section h1", { opacity: 0 }, {
               opacity: 1, duration: 3, 
            })

           
    })
  return (
    <div className='form-section'>
        <div className="form-section-left">
                <h1>We’d love to hear from you.</h1>
                    <span>  <img src={contactpattern} alt="" /></span>
            </div>
            <div className="form-section-right">
                <form className='form-section-right-form'>
                    <div className="form-section-right-form-group">
                        <input type="text" id="name" placeholder='Name*' />
                    </div>
                    <div className="form-section-right-form-group">
                        <input type="email" id="email" placeholder='Email*' />
                    </div>
                    <div className="form-section-right-form-group">
                        <input type="text" id="message" placeholder='Message' />
                    </div>
                    <div className="form-section-right-form-group">
                        <button type="submit">Submit &rarr;</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default FormSection