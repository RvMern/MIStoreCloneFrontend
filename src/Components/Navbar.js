import React from "react";
import "../Styles/navbar.css"
import logo from "../images/favicon.png"
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div id="myNavbar" className="navbar">
        <div className="nav-menu">
        <Link to="/"><img src={logo} onMouseOver={()=>{document.getElementById("myNavbar").style.backgroundColor = "orangered";}}
        onMouseLeave={()=>{const col = document.getElementById("myNavbar");
        col.style.backgroundColor = "orange";
        col.style.transition = "0.6s"}} id="logoImage" alt="logo" /></Link>
          <Link className="nav-options" to="/miPhones">MI Phones</Link>
          <Link className="nav-options" to="/redmiPhones">Redmi Phones</Link>
          <Link className="nav-options" to="/tv">TV</Link>
          <Link className="nav-options" to="/laptops">Laptops</Link>
          <Link className="nav-options" to="filters&lifestyle">Filters & Lifestyle</Link>
          <Link className="nav-options" to="/homeproduct">Home</Link>
          <Link className="nav-options" to="/audio">Audio</Link>
          <Link className="nav-options" to="/accessories">Accessories</Link>
        </div>

        <div className="nav-search">
          <input type="text" name="search" placeholder="Search Products Here..."/>
          <button>Search</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
