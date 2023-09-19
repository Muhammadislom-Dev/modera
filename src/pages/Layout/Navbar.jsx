import React from "react";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbarList">
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
