import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'
import React,{useState} from 'react';

function MainCarousel({interval}) {

    const [backgroundIndex, setBackgroundIndex] = useState(0);

  const handleSlideChange = (selectedIndex) => {
    
    setBackgroundIndex(selectedIndex);
  };

  return (

    <div className='carouselBox'>

    <Carousel 
        interval={interval}
        onSelect={handleSlideChange}
        slide={false}
        className='carousel'>

      <Carousel.Item>
        <img
        className='slide1'
        src={'/img/japan1.jpg'}
        style={{objectFit:'cover'}}
        alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='slide2'
        src='/img/japan2.jpg'
        style={{objectFit:'cover'}}
        alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className='slide3'
        src='/img/japan3.jpg'
        style={{objectFit:'cover'}}
        alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MainCarousel;