import React from 'react'
import "../Styles/HotItemCard.css"

const HotItemCard = ({name,image,price,index}) => {
  return (
    <div className='HotItemCard'>
        <img src={image} alt={`product ${index}`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard