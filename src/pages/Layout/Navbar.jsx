import React from "react";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarList}>
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
