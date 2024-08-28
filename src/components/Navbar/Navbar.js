import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <span className="navbar-heading">Routing using Library</span>
      <div>
        <Link to="/" className="navbar-path">
          Home
        </Link>
        <Link to="/about" className="navbar-path">
          About
        </Link>
        <Link to="/contact" className="navbar-path">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
