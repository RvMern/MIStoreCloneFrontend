import React from 'react'
import "../Styles/offers.css"

const Offers = ({data}) => {
    const offerData = data;
  return (
    <>
        <div className="offer-container">
            <div className='offer offer-1'>
                <a href={offerData[0].url}><img src={offerData[0].image}  alt="offerImg1" /></a>
            </div>
            <div className='offer offer-2'>
            <a href={offerData[1].url}><img src={offerData[1].image}  alt="offerImg2" /></a>
            </div>
            <div className='offer offer-3'>
            <a href={offerData[2].url}><img src={offerData[2].image}  alt="offerImg3" /></a>
            </div>
        </div>

    </>
  )
}

export default Offers