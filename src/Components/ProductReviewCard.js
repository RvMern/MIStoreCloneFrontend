import React from 'react'
import "../Styles/ProductReviewCard.css"

const ProductReviewCard = ({price,name,image,review,index}) => {
  return (
    <div className='ProductReviewCard'>
        <img src={image} alt={`product Review ${index}`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <span>{price}</span>
    </div>
  )
}

export default ProductReviewCard