import React, { useState } from "react";
import "./Navbar.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about us/About";
import Services from "../services/Services.jsx";
import Prodect from "../prodect/Prodect";
import Contact from "../contact us/Contact";
import { RiMenuAddFill } from "react-icons/ri";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(0);

  const toggaleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="navbar">
      <nav className="nav_container">
        <div className="logo">MJ. AstreaM</div>
        <ul className={`uinavbar ${showNavbar ? "show" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services" id="serve">
              Services
            </Link>
          </li>
          <li>
            <Link>Prodect</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
        </ul>

        <RiMenuAddFill className="menu_bar" onClick={toggaleNavbar} />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/prodect" element={<Prodect />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Navbar;
