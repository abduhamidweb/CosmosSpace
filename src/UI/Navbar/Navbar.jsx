import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "../../assets/images/LOGO.png";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="MDB Logo" loading="lazy" />
            </a>
            <div className="registrition">
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/sigin" className="btn hoverBtn">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
