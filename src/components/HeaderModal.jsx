import React from "react";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import "./style.css";

function HeaderModal({ handleOpen, handleClose }) {
  const { t } = useTranslation();
  return (
    <div className="headermodal">
      <Navbar handleOpen={handleOpen} handleClose={handleClose} />
      <div className="container container-fluid">
        <div className="headerModalList">
          <h1>
            {t("your")} <br /> <h2>{t("future")}</h2> {t("place")}
          </h1>
          <div className="headerModalItem">
            <h4>{t("menu")}</h4>
            <div className="headerModalTop">
              <a href="#about">{t("hello1")}</a>
              <a href="#layout">{t("hello2")}</a>
              <a href="#offer">{t("hello3")}</a>
              <a href="#specification">{t("hello4")}</a>
              <a href="#contact">{t("hello5")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderModal;
