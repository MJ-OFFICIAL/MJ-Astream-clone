import React from "react";
import "./Footer.css";
import { MdOutgoingMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="left">
          <h1>MJ ASTREAM</h1>
          <input type="email" placeholder="Email" />
          <button>SUBSCRIBE</button>
        </div>
        <div className="mid">
          <h2>Our Services</h2>
          <div className="mid_h4">


          <h5> <FaAngleRight /> Web Design and Development</h5>
          <h5> <FaAngleRight /> App Development</h5>
          <h5> <FaAngleRight /> Website Maintenance</h5>
          <h5> <FaAngleRight /> Digital Marketing</h5>
          <h5> <FaAngleRight /> Graphic Designing</h5>
          <h5> <FaAngleRight /> E-Commerce Solutions</h5>
          <h5> <FaAngleRight /> Domain Services</h5>
          <h5> <FaAngleRight /> Hosting Services</h5>
          </div>
        </div>
        <div className="right">

        <h2>Contact Info.</h2>
        <div><MdOutgoingMail />   mjofficial5041@gmail.com</div>
        <div><FaPhoneVolume />   9158989458 </div>
        <div><FaLocationCrosshairs />  PUNE. </div>  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
