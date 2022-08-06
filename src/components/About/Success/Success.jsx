import React from 'react'
import Container from '../../Container/Container'
import Heading from '../../Heading/Heading'
import "./Success.scss"
function Success() {
  return (
    <div className='success'>

        <Container>
            <Heading>OUR MARKS OF SUCCESS</Heading>
            <div className="success-content">
                <div>
                    <span>01</span>
                    <h4>Quality</h4>
                </div>
                <div>
                    <span>02</span>
                    <h4>Trust</h4>
                        </div>
                <div>
                    <span>03</span>
                    <h4>Commitment</h4>
                    </div>
                <div id='last'>
                    <span>04</span>
                    <h4>Excellence</h4>
                    </div>
            </div>
        </Container>
    </div>
  )
}

export default Success