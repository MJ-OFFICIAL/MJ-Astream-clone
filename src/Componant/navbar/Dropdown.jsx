import React from "react";
import "./Dropdown.css";

const Dropdown = ({ isVisible }) => {
  return (
    <div>
      <div>
        <div className={`hover_card ${isVisible ? 'visible' : ''}`}>
          <h4>WEB DESIGN AND DEVELOPMENT</h4>
          <h4>APP DEVELOPMENT</h4>
          <h4>WEBSITE MAINTENANCE</h4>
          <h4>DIGITAL MARKETING</h4>
          <h4>GRAPHIC DESIGNING</h4>
          <h4>E-COMMERCE SOLUTIONS</h4>
          <h4>DOMAIN SERVICES</h4>
          <h4>HOSTING SERVICES</h4>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
