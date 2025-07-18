import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import './nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the menu after clicking a link
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="mainDiv">
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul ref={dropdownRef} className={`home-u1 ${isOpen ? 'show' : ''}`}>
          <li className="home-11">
            <a href="#home" className="active home-a" onClick={(e) => handleLinkClick(e, 'home')}>
              <h1>Home</h1>
            </a>
          </li>
          <li className="home-11">
            <a href="#about" className="active home-a" onClick={(e) => handleLinkClick(e, 'about')}>
              <h1>About</h1>
            </a>
          </li>
          <li className="home-11">
            <a href="#journey" className="active home-a" onClick={(e) => handleLinkClick(e, 'journey')}>
              <h1>Journey</h1>
            </a>
          </li>
          <li className="home-11">
            <a href="#skills" className="active home-a" onClick={(e) => handleLinkClick(e, 'skills')}>
              <h1>Skills</h1>
            </a>
          </li>
          <li className="home-11">
            <a href="#project" className="active home-a" onClick={(e) => handleLinkClick(e, 'project')}>
              <h1>Project</h1>
            </a>
          </li>
          <li className="home-11">
            <a href="#services" className="active home-a" onClick={(e) => handleLinkClick(e, 'services')}>
              <h1>Services</h1>
            </a>
          </li>
          <li className="home-11">
            <a href="#contact" className="active home-a" onClick={(e) => handleLinkClick(e, 'contact')}>
              <h1>Hire Me</h1>
            </a>
          </li>
          
          {/* <Link to="/login">
            <button>
              hi
            </button>
          </Link> */}
        </ul>
      </div>
    </div>
  );
}

export default Nav;