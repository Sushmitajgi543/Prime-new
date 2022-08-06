import React from 'react'
import Heading from '../../Heading/Heading'
import "./GallerySection.scss"
import img1 from '../../../assets/Image/pimg2.png';
import img2 from '../../../assets/Image/pimg1.png';
import img3 from '../../../assets/Image/pimg3.png';
function GallerySection() {
  return (
    <div className="gallery-section">

<div className="gallery-section-left">
                <div className="gallery-section-left-top">
                    <Heading>YOUR HOME IN THE
                        MIDST OF NATURE</Heading> 
                </div>
                <div className="gallery-section-left-middle">
                    <div className="gallery-section-left-middle-left">

                    </div>
                    <div className="gallery-section-left-middle-right">
                        <p>Loft gardens reshape & redefine living since 2017. It is an amalgamation
                            of upscale housing with nature. Our loft gardens are more than just
                            houses, they are a work of art. As an extension of its living and eating
                            space, each unit is allotted a loft garden, making the house sumptuous
                            and luxuriant.</p>
                    </div>
                </div>
                <div className="gallery-section-left-bottom">
                    <img src={img3} alt="" />
                </div>

            </div>
            <div className="gallery-section-right">
                <div className="gallery-section-right-top">
                    <img src={img2} alt="" />
                </div>
                <div className="gallery-section-right-bottom">
                    <img src={img1} alt="" />
                </div>
            </div>

    </div>
  )
}

export default GallerySection