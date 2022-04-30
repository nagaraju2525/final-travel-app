import React from 'react'
import './Slide.css'
import {Carousel} from 'react-bootstrap'
import logo from './images/pexels-errin-casano-2356045.jpg'
import logo2 from './images/pexels-francesco-ungaro-2325446.jpg'
import logo3 from './images/pexels-gabriela-palai-507410.jpg'
import logo4 from './images/pexels-pierre-blaché-2901209.jpg'
import logo5 from './images/pexels-tomáš-malík-1660995.jpg'
import Zoom from 'react-reveal/Zoom';
const Slide = () => {
  return (
    <Zoom>
    <div className='slide-div-md'>
        <div className='image-slider'>
        <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={logo4}
      alt="First slide"
    />
    <Carousel.Caption>
     <div className='image-name-md'>
     <h3>Travel Your Way</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={logo5}
      alt="Second slide"
    />
    <Carousel.Caption>
    <div className='image-name-md'>
    <h3>Travel Your Way</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={logo}
      alt="Third slide"
    />
    <Carousel.Caption>
      <div className='image-name-md'>
      <h3>Travel Your Way</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={logo2}
      alt="First slide"
    />
    <Carousel.Caption>
     <div className='image-name-md'>
     <h3>Travel Your Way</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={logo3}
      alt="First slide"
    />
    <Carousel.Caption>
     <div className='image-name-md'>
     <h3>Travel Your Way</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    </div>
    </Zoom>
  )
}

export default Slide