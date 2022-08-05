import React from 'react'
import ".//Testimonial.scss"
import Container from '../../Container/Container'
import quotation from '../../../assets/Image/quotation.png';
import Heading from '../../Heading/Heading';

function Testimonial() {
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