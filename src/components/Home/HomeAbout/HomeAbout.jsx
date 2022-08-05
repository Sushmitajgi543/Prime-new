import React from 'react'
import "./Homeabout.scss"
import Container from '../../Container/Container'
import { Link } from 'react-router-dom';
function HomeAbout() {
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