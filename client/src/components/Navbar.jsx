import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper #1565c0 blue darken-3">
        <Link to="/" className="brand-logo left">
          Make Quotes
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
