import React from "react";
import "./About.css";
import about_us1 from "../../assets/about_us1.jpg";

const About = () => {
  return (
    <>
      <div>
        <div className="about_us_container"></div>
        <div className="about_us">
          <h1>ABOUT US</h1>
          <div className="about_img">
            <img src={about_us1} alt="" />
          </div>
          <div className="about_text">
            <h2>
              Where Ideas Take Flight - Elevate Your Online Experience with Our
              Web Services!
            </h2>
            <p>
              Welcome to Astream, a dynamic online platform brought to you by
              ThinkWebHub Pvt. Ltd., your premier destination for Superb online
              web services. We are a passionate team of tech enthusiasts and
              creative minds, dedicated to providing innovative solutions that
              cater to your unique needs. With a track record of excellence and
              a commitment to customer satisfaction, we are your trusted partner
              in shaping your online success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
