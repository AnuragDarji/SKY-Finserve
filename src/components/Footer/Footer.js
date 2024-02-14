import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="goal">
        <h1>FinPath</h1>
        <p>
          Our primary goal is to empower business owners, agencies, and
          freelancers with maximum creative freedom.
        </p>
      </div>

      <div className="footer-links">
        <ul>
          <li>
            <h3>Features</h3>
          </li>
          <li>
            <a href="/index.html">Page builder</a>
          </li>
          <li>
            <a href="/index.html">Theme options</a>
          </li>
          <li>
            <a href="/index.html">Theme builder</a>
          </li>
          <li>
            <a href="/index.html">Template library</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Resources</h3>
          </li>
          <li>
            <a href="/index.html">Support center</a>
          </li>
          <li>
            <a href="/index.html">Documentation</a>
          </li>
          <li>
            <a href="/index.html">Community</a>
          </li>
          <li>
            <a href="/index.html">Hosting</a>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Follow us</h3>
          </li>
          <li>
            <a href="/index.html">Behance</a>
          </li>
          <li>
            <a href="/index.html">Dribbble</a>
          </li>
          <li>
            <a href="/index.html">Facebook</a>
          </li>
          <li>
            <a href="/index.html">Instagram</a>
          </li>
        </ul>
      </div>

      <div className="touch">
        <h3>Get in touch</h3>
        <a href="/index.html"><span>hello@company.com</span></a>
        <div className="btn-container">
            <ul>
                <li><a href="/index.html"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="/index.html"><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href="/index.html"><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
