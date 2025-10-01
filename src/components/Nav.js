import React, { useState } from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={littlelemon_logo} alt="Little Lemon Logo" />
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
