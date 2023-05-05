import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  return (
    <nav>
      <div className="nav-wrapper #1565c0 blue darken-3">
        <Link to="/" className="brand-logo left">
          Make Quotes
        </Link>
        <ul id="nav-mobile" className="right">
          {token ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/create">Create</Link>
              </li>
              <li>
                <button
                  className="btn red"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
