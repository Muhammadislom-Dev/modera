import React, { useState } from "react";
import styles from "./Gallery.module-v2.css";
import Logo from "../assets/logo.png";
import twodote from "../assets/twodote.svg";
import { useTranslation } from "react-i18next";
import Language from "./Language";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar({ setOpen, open }) {
  const { t } = useTranslation();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    window.location.reload();
  };
  return (
    <div
      style={{ backgroundColor: `${open === false ? "" : "#40128B"}` }}
      className="navbar">
      <div className="container">
        <div className={styles.navbarList}>
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </Link>
          <div className={styles.navbarItem}>
            <a href="tel:+998940007777" className={styles.navbarLink}>
              +99894 000 7777
            </a>
            <Language />
            {open === false ? (
              <button onClick={handleOpen} className="navbarButton">
                <h4>{t("menu")}</h4>
                <img src={twodote} alt="" className="navbarIcon" />
              </button>
            ) : (
              <button onClick={handleClose} className="navbarButton">
                <h4>{t("close")}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none">
                  <rect
                    y="45.2548"
                    width="64"
                    height="4"
                    transform="rotate(-45 0 45.2548)"
                    fill="#FFD2D7"
                  />
                  <rect
                    x="2.86987"
                    y="0.0416565"
                    width="64"
                    height="4"
                    transform="rotate(45 2.86987 0.0416565)"
                    fill="#FFD2D7"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
