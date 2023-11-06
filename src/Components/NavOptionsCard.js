import React from 'react';
import "../Styles/NavOptionCard.css";

const NavOptionsCard = ({name,image,price,index,}) => {
  return (
    <div className='nav-option-card'>
        <img src={image} alt={`navOptionImage ${index}`} />
        <p>{name}</p>
        <p>{price}</p>
    </div>
  )
}

export default NavOptionsCard