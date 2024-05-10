import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../Assets/barometer.png";
import './Navbar.css'
const Navbar = () => {
 
  return (
    <div className="navbar">
      <div className="navcontainer">
        <div className="logo">
          <p className="heading">UrFaveWeather</p>
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
  
        <span className="write">
            <Link className="Login" to="/">
              Login
            </Link>
          </span>

        <span className="write">
            <Link className="logout" to="/Logout">
              Logout
            </Link>
          </span>
        
          
          <span className="write">
            <Link className="Cweather" to="/weather">
              Weatherapp
            </Link>
          </span>
        </div>
      </div>
   
  );
};

export default Navbar;
