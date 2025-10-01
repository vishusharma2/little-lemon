import React from "react";
import small_logo from "../images/small_logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={small_logo} alt="Little Lemon Logo" />
            <p>
              Little Lemon - Authentic Mediterranean cuisine in the heart of
              Chicago.
            </p>
          </div>
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
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
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>123 Main Street</li>
              <li>Chicago, IL 60601</li>
              <li>(312) 555-0123</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#youtube">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
