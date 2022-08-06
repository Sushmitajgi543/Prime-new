import React from 'react'
import "./HeroSection.scss"
import circle from "../../../assets/Image/circle.png"
function HeroSection() {
    return (
        <div className="abt-hero-section">
            <div className="abt-hero-section-left">

                <div className="abt-hero-section-left-content">

                </div>
            </div>
            <div className="abt-hero-section-right">
                <h1>RE
                    <span>
                        <img src={circle} alt="" />
                    </span>
                    DEFINING EXPERIENCES</h1>
            </div>
        </div>
    )
}

export default HeroSection