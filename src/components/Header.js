import React from "react";
import food1 from "../images/food1.avif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/booking">
              <button aria-label="Reserve a table at Little Lemon restaurant">
                Reserve Table
              </button>
            </Link>
          </div>
          <div className="hero-image">
            <img
              src={food1}
              alt="Delicious Mediterranean food at Little Lemon restaurant"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
