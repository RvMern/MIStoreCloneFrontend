import React from 'react'
import "../Styles/starproduct.css"

const StarProduct = ({data}) => {
    const starProductData = data;
  return (
    <>
      <div className='starproduct-container'>

        <div className='starproduct doodle-1'>
            <a href={starProductData[0].url}><img src={starProductData[0].image} alt="Star-Product-0" /></a>
        </div>

        <div className='starproduct doodle-2'>

            <div className='doodle-2-1'>
            <div className='starproduct-1'>
            <a href={starProductData[1].url}><img src={starProductData[1].image} alt="Star-Product-1" /></a>
            <a href={starProductData[2].url}><img src={starProductData[2].image} alt="Star-Product-2" /></a>
            </div>

            <div className='starproduct-2'>
            <a href={starProductData[3].url}><img src={starProductData[3].image} alt="Star-Product-3" /></a>
            </div>
            </div>

        </div>

      </div>
    </>
  )
}

export default StarProduct