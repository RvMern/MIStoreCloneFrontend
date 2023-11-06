import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = ({data}) => {
  const sliderStartData = data.start;

  return (
    <>
        <Carousel fade>
            {
              sliderStartData && sliderStartData.map((item,index)=>{
                return(
                    <Carousel.Item interval={3000}  key={index}>
                    <img className='d-block w-100' src={item} alt={item} />
                    </Carousel.Item>
                )
              })

            }
        </Carousel>

    </>
  )
}

export default Slider