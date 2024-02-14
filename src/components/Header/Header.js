import React, { useState,useEffect } from "react";
import "./Header.css";
import logo from "../../assets/Asset 35_1@4x.png";

const Header = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsScrolledDown(isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="header" style={{ position: 'fixed', top: isScrolledDown ? '-120px' : '0', transition: 'top 0.3s ease', }}>
      <div className="left-nav">
        <img src={logo} alt="logo" />
        <nav>
          <ul id="navbar" className={state ? "#navbar active" : "#navbar"}>
            <li>
              <a href="/index.html">Feature</a>
            </li>
            <li>
              <a href="/index.html">Pricing</a>
            </li>
            <li>
              <a href="/index.html">Blog</a>
            </li>
            <li>
              <a href="/index.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={state ? "btn active" : "btn"}>
        <a href="/index.html" className="test-completed">
          <button>Book a demo</button>
        </a>
      </div>

      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
};

export default Header;
