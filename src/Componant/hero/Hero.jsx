import React, { useState } from "react";
import "./Hero.css";
const Hero = () => {
//  const [cont,setcont] = useState(0)

  return (
    <div>
      <div className="hero_container">
        <div className="hero-text">
          <h1>
            Welcome to Astream Your One-Stop Online Web Services Provider!
          </h1>
          <p>
            At Astream, we are committed to offering complete online web
            services to meet your typical needs.
          </p>
           <div className="hero-btn">
            Click Hire
           {/* <div>
            <button onClick={()=>{
              setcont(cont-5)
            }}>
              minus
            </button>
            click : {cont}
            <button mou={()=>{
              setcont(cont+5)
            }}>
            add
            </button>
           </div> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
