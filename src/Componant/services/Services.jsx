import React from "react";
import "./Services.css";
import Service_card from "../home/home_services/Service_card";
import card_1 from "../../assets/card_1.png";
import card_2 from "../../assets/card_2.png";
import card_3 from "../../assets/card_3.png";
import card_4 from "../../assets/card_4.png";
import card_5 from "../../assets/card_5.png";
import card_6 from "../../assets/card_6.png";
import img from '../../assets/about_bg.jpg'
const Services = () => {
  
  return (
    <div className="services_container">
      <h1>SERVICES</h1>
      <div className="card_container">
     
          <Service_card text="Website Designing Services" icon={card_1} />
          <Service_card text="App Development Services" icon={card_2} />
          <Service_card text="Website Maintenance services" icon={card_3} />
          <Service_card text="Digital Marketing Services" icon={card_4} />
          <Service_card text="Hosting Services" icon={card_5} />
          <Service_card text="Domain Services" icon={card_6}  />
      </div>
    </div>
  );
};

export default Services;
