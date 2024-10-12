import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar">
      <div className="logo_container">
        <h1>Osteria</h1>
      </div>
      <ul className="navbar_ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
      <button type="button" className="btn btn-outline-dark">
        Dark
      </button>
    </nav>
  );
}

export default Header;
