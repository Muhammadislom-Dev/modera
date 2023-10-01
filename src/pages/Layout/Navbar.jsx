import React from "react";
import styles from "./Layout.module.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./style.css";
import Language from "../../components/Language";
import { useTranslation } from "react-i18next";

function Navbar({ open, handleOpen, handleClose }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="container">
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
