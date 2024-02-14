import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="left-content">
        <div id="head">
          <h1>Unleash the Power of Your Finances with SKY Finserve</h1>
        </div>
        <div id="para">
          <p>
            Welcome to SKY Finserve, your trusted partner in financial
            empowerment. We take pride in providing a comprehensive range of
            financial solutions tailored to meet your diverse needs and
            aspirations.
          </p>
        </div>
      </div>
      <div className="right-content">
        <img src="https://picsum.photos/500/400" alt="right-img" />
      </div>
    </div>
  );
};

export default About;
