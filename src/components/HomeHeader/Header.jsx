import React from 'react'
import Container from '../Container/Container'
import logo from '../../assets/Image/logo.png'
import { Link } from 'react-router-dom'
import "./Header.scss"
function Header() {
  return (
    <div className='header-section'>
        <Container className="header-section-container">

            <div className='header-section-logo'>
                <div>
                <img src={logo} alt="" />

                </div>
            </div>
            <div  className='header-section-menu'>
                <div className='header-section-menu-hr'>
                    <hr />
                </div>
                <div className='header-section-menu-content'>
                    <div className='header-section-menu-content-para'>
                    <p>
                        We build great homes. 
                        <br />Do you have a project to discuss? let's talk. 
                        <Link to="/contact-us">&rarr;</Link>
                    </p>
                    </div>
                    <div className='header-section-menu-content-list'>
                    <ul>
                            <li>
                                <Link to="/">  Home</Link>

                            </li>
                            <li>
                                <Link to="/project">
                                    Projects
                                </Link>

                            </li>
                            <li>
                                <Link to="/about-us">Prime Story</Link>

                            </li>
                            <li>
                                <Link to="/contact-us">Inquiry</Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header