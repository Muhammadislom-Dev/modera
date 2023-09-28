import React from "react";
import Tower from "../assets/tower.png";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Zoom } from "react-reveal";

function Company() {
  const { t } = useTranslation();
  return (
    <div id="about" className="company">
      <div className="container container-fluid">
        <div className="companyList">
          <img src={Tower} alt="Modera Tower" className="companyImage" />
          <p
            className="companyText"
            dangerouslySetInnerHTML={{
              __html: t("companyText"),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Company;
