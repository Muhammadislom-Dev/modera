import React from "react";
import TowerImage from "../assets/tower (1).png";
import TowerImage2 from "../assets/tower2.png";
import { Fade } from "react-reveal";
import { t } from "i18next";
import "./style.css";

function Tower() {
  return (
    <div className="tower">
      <div style={{ display: "flex" }} className="container">
        <div className="towerList">
          <Fade left cascade>
            <div className="towerOne">
              <span>24 th {t("hello11")}</span>
              <h3>{t("hello12")}</h3>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="towerTwo">
              <span>21-23 rd {t("hello11")}</span>
              <h3>{t("hello13")}</h3>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="towerThree">
              <span>7-20 th {t("hello11")}</span>
              <h3>{t("hello14")}</h3>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="towerFour">
              <span>6th {t("hello11")}</span>
              <h3>{t("hello15")}</h3>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="towerFive">
              <span>5th {t("hello11")}</span>
              <h3>{t("hello16")}</h3>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="towerSix">
              <span>2-4th {t("hello11")}</span>
              <h3>{t("hello17")} </h3>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="towerSeven">
              <span>1st {t("hello11")}</span>
              <h3>{t("hello18")}</h3>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="towerEight">
              <span>1st {t("hello11")}</span>
              <h3>{t("hello19")}</h3>
            </div>
          </Fade>
        </div>
        <img src={TowerImage} alt="Modera Tower" className="towerImage" />
        <div className="div">
          <img src={TowerImage2} alt="Modera Tower" className="tower-image" />
        </div>
      </div>
    </div>
  );
}

export default Tower;
