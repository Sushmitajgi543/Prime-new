import Carousel from 'react-bootstrap/Carousel';
import bg from "../../../assets/Image/home-hero.png"
import Header from '../../HomeHeader/Header';
function Slider() {
  return (
    <Carousel slide={true}>
       
      <Carousel.Item id='hero-section'>
      
      <Header/>
        <Carousel.Caption>
        
        <div className='hero-section-content'>

<h1>We Build Great Homes</h1>
</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id='hero-section'>
      
      <Header/>
        <Carousel.Caption>
        
        <div className='hero-section-content'>

<h1>We Build Great Homes</h1>
</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id='hero-section'>
      
      <Header/>
        <Carousel.Caption>
        
        <div className='hero-section-content'>

<h1>We Build Great Homes</h1>
</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;