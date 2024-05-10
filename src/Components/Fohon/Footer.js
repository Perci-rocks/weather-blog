import React from "react";
import Logo from "../Assets/Logo.png";

const Footer = () => {
  return (
    <footer >
      <img src={Logo} alt="" />
      <span>
         <b>Know before you go</b>.
         <p>By Perci-rocks</p>
      </span>
    </footer>
  );
};

export default Footer;
