import React from 'react'
import Heading from '../..//Heading/Heading'
import "./StunningSection.scss"
import gym from '../../../assets/Image/gym.png';
import lounge from '../../../assets/Image/lounge.png';
import play from '../../../assets/Image/play.png';
import gazebo from '../../../assets/Image/gazebo.png';
import plaza from '../../../assets/Image/plaza.png';
import threater from '../../../assets/Image/threater.png';

function StunningSection() {
    return (
        <div className="stunning-section">

            <div className='stunning-section-left'>
                <div></div>
            </div>
            <div className='stunning-section-middle'>
                <Heading>Stunning Luxury Amenities, Designed For Life</Heading>
                <div className='stunning-section-middle-container'>
                    <div><span><img src={plaza} alt="" /></span> <h1>Central Plaza</h1></div>
                    <div><span><img src={gazebo} alt="" /></span> <h1>Gazebo</h1></div>
                    <div><span><img src={play} alt="" /></span> <h1>Kids Play Area + Multipurpose Play Court</h1></div>
                </div>
                <div className='stunning-section-middle-container'>
                    <div><span><img src={threater} alt="" /></span> <h1>Home Theater</h1></div>
                    <div><span><img src={lounge} alt="" /></span> <h1>Lounge</h1></div>
                    <div><span><img src={gym} alt="" /></span> <h1>Gym</h1></div>
                </div>
            </div>

            <div className='stunning-section-right'>
                <div></div>
            </div>

        </div>
    )
}

export default StunningSection