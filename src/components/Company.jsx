import React from "react";
import Tower from "../assets/tower.png";
import { useTranslation } from "react-i18next";
import "./style.css";

function Company() {
  const { t } = useTranslation();
  return (
    <div id="about" className="company">
      <div className="container container-fluid">
        <div className="companyList">
          <img src={Tower} alt="Modera Tower" className="companyImage" />
          <p className="companyText">{t("companyText")}</p>
        </div>
      </div>
    </div>
  );
}

export default Company;
