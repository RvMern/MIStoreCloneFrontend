import React from 'react'
import "../Styles/PreNavbar.css"
import {FiShoppingCart} from "react-icons/fi";
import {Link} from "react-router-dom"


const PreNavbar = () => {
  return (
    <>
      <div className='prenavbar'>
        <div className='prenavbar-1'>
          <Link to="#">MI INDIA</Link>
          <span>|</span>
          <Link to="#">GET MI STORE APP</Link>
          <span>|</span>
          <Link to="#">ONLINE HELP</Link>
          <span>|</span>
          <Link to="#">RETAIL STORE</Link>
        </div>
        <div className='prenavbar-2'>
        <Link to="#">SIGN UP</Link>
        <span>|</span>
        <Link to="#">SIGN IN</Link>
        <span>|</span>
        <Link className='cart' to="#">CART <i><FiShoppingCart/></i>
        <span className='badge-number badge bg-white text-dark'>0</span>
        </Link>
        </div>
      </div>
    </>
  )
}

export default PreNavbar