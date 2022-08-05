import React from 'react'
import Container from '../../Container/Container'
import Heading from '../../Heading/Heading'
import { Link } from 'react-router-dom';
import img1 from '../../../assets/Image/home1.png';
import img2 from '../../../assets/Image/home2.png';
import ".//Homeproject.scss"
function HomeProject() {
  return (

    <div className="home-project">
      <Container>
        <div className="home-project-title">

          <Heading>
            COMPLETED PROJECTS
          </Heading>
        </div>
        <div className="home-project-content">

          <div className='home-project-content-1'>
            <div>
              <img src={img1} alt="" />

            </div>
            <p>Loft Gardens</p>
            <h3>Your home in the
              midst of nature</h3>
            <Link to="/project">Explore More&nbsp; &rarr;</Link>
          </div>


          <div className='home-project-content-2'>
            <div>
              <img src={img2} alt="" />

            </div>
            <p>Prime Status</p>
            <h3>Practically designed
              for a better living</h3>
            <Link to="/project">Explore More&nbsp; &rarr;</Link>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default HomeProject