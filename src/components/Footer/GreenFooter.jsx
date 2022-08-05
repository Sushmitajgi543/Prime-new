import React from 'react'
import pattern from "../../assets/Image/pattern.png";
import { Link } from 'react-router-dom';
import './Footer.scss'

function GreenFooter() {
    return (
        <div className='green-footer'>
            <div className='green-footer-container' id='first'>
                <img src={pattern} alt="" />
            </div>
            <div className='green-footer-container 2nd'>
                <h1>Do you want to<br />
                    build a new home with us?</h1>
            </div>
            <div className='green-footer-container 3rd'>
            <Link to="/contact-us"><button type='button'> Let's Chat</button></Link>
            </div>
        </div>
    )
}

export default GreenFooter