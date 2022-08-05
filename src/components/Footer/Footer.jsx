import React from 'react'
import Container from '../Container/Container'
import './Footer.scss'
import logo from "../../assets/Image/logo-footer.png";
import { FaFacebookSquare,FaInstagramSquare,FaMobile,FaYoutube,FaMapMarker } from "react-icons/fa";



function Footer() {
  return (
    <div className='footer'>

      <Container>
        <div className='footer-container'>
          <span className='logo'>
            <img src={logo} alt="" />
          </span>
          <div>
            <p><span><FaInstagramSquare /></span>Instagram</p>
            <p><span><FaFacebookSquare /></span>Facebook</p>
            <p><span><FaYoutube /></span>Youtube</p>
          </div>

        </div>
        <div className='footer-container'>
          <h1>We build great homes.
          </h1>
          <p><span><FaMapMarker /></span>FP No. 121/2, Near Apple Green Bungalows, S.G. Highway, Chharodi, Ahmedabad- 382481.</p>
          <p><span><FaMobile /></span>+91 95123 35511</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer