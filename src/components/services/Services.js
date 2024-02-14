import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="wrap-services">
      <div className="services">
        <div className="left-serv">
          <p id="extra-info">
            <i>Expertise and Support in the Financial Landscape</i>
          </p>
          <br />
          <h2>Why Choose SKY Finserve?</h2>
          <br />
          <p>
            With SKY Finserve, you're not just another client; you're a valued
            partner on your path to financial success. Our dedication to
            excellence, personalized approach, and unwavering commitment set us
            apart from the rest.
          </p>
        </div>
        <div className="grid-container">
          <div className="service">
            <h3>Student Loans</h3>
            <br />
            <p>
              Embark on your educational journey without financial worries. Our
              student loan solutions are designed to make pursuing higher
              education accessible and affordable.
            </p>
          </div>
          <div className="service">
            <h3>Forex Exchange</h3>
            <br />
            <p>
              Navigate global transactions with ease. Our forex exchange
              services simplify international transactions, ensuring seamless
              and secure transfers across borders.
            </p>
          </div>
          <div className="service">
            <h3>Insurance Coverage</h3>
            <br />
            <p>
              Protect what matters most. Our comprehensive insurance coverage
              offers peace of mind, safeguarding you and your loved ones against
              unforeseen circumstances.
            </p>
          </div>
          <div className="service">
            <h3>Wealth Management</h3>
            <br />
            <p>
              Secure your financial future with confidence. Our wealth
              management services are tailored to align with your individual
              financial goals, ensuring a prosperous tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
