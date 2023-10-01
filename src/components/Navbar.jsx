import React, { useState } from "react";
import Logo from "../assets/logo.png";
import twodote from "../assets/twodote.svg";
import { useTranslation } from "react-i18next";
import Language from "./Language";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar({ handleOpen, open, handleClose }) {
  const [navbar, setNavbar] = useState(false);
  const { t } = useTranslation();

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "navbar-container active" : "navbar-container"}>
      <div className="container-fluid">
        <div className="navbarList">
          <Link to="/">
            <img src={Logo} alt="Logo" className="navbar-logo" />
          </Link>
          <div className="navbarItem">
            <a href="tel:+998940007777" className="navbarLink">
              +99894 000 7777
            </a>
            <Language />
            {open === false ? (
              <button onClick={handleOpen} className="navbarButton">
                <h4>{t("menu")}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="19"
                  viewBox="0 0 64 19"
                  fill="none">
                  <rect width="64" height="4" fill="white" />
                  <rect y="15" width="64" height="4" fill="white" />
                </svg>
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
                    y="45.2549"
                    width="64"
                    height="4"
                    transform="rotate(-45 0 45.2549)"
                    fill="white"
                  />
                  <rect
                    x="2.86987"
                    y="0.041626"
                    width="64"
                    height="4"
                    transform="rotate(45 2.86987 0.041626)"
                    fill="white"
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
