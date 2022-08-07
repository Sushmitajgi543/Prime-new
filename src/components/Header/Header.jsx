import React from 'react'

import './Header.scss'

import { Nav, Container, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/Image/logo.png';
function Header() {
  return (
    <div className='header'>
      
        <div className='header-logo'>
          <div>
            <Link to="/"><img src={logo} alt="" /></Link>

          </div>

        </div>
        <div className='header-container'>
          <hr />
          <div className='header-container-content'>
            <div className='header-container-content-left'>

              <p>
                We build great homes. <br />Do you have a project to discuss? let's talk. &rarr;
              </p>
            </div>
            <div className='header-container-content-right'>
              <Navbar key="lg" expand="false" className="mb-3">
                <Container fluid id='container'>
                  <Navbar.Toggle id="toggle" aria-controls={`offcanvasNavbar-expand-lg`} />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end"
                  >
                    <Offcanvas.Header className='close' closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                        Offcanvas
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Link className='nav-a' to="/">  <Nav.Link  className='nav-a'  href="#action1">Home</Nav.Link></Link>
                        <Link className='nav-a' to="/project"><Nav.Link  className='nav-a' href="#action2">Projects</Nav.Link></Link>
                        <Link className='nav-a' to="/about-us"><Nav.Link  className='nav-a' href="#action2">Prime Story</Nav.Link></Link>
                        <Link className='nav-a' to="/contact-us"><Nav.Link className='nav-a'  href="#action2">Inquiry</Nav.Link> </Link>
                      </Nav>

                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Header