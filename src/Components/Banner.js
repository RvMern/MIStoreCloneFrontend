import React from 'react'
import {Carousel} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Banner = ({data}) => {
    const sliderEndData = data.end;
  return (
    <>
        <Carousel fade>
        {
              sliderEndData && sliderEndData.map((item,index)=>{
                return(
                    <Carousel.Item interval={2000}  key={index}>
                    <img className='d-block w-100' src={item.image} alt={`Banner ${index}`} />
                    <Carousel.Caption>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>{`- ${item.source}`}</p>
                      <u>Read More...</u>
                    </Carousel.Caption>
                    </Carousel.Item>
                )
              })           
        }
        </Carousel>
    </>
  )
}

export default Banner