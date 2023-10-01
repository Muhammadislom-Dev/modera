import React from "react";
import TowerImage from "../assets/tower12.png";
import TowerImage2 from "../assets/tower3.png";
import { Fade } from "react-reveal";
import { t } from "i18next";
import "./style.css";

function Tower() {
  return (
    <div className="tower">
      <div className="container container-maxWidth">
        <div style={{ display: "flex", width: "100%" }} className="tower-box">
          <div className="towerList">
            <Fade left cascade>
              <div className="towerOne">
                <p>24 th {t("hello11")}</p>
                <h3>{t("hello12")}</h3>
              </div>
            </Fade>
            <Fade left cascade>
              <div className="towerTwo">
                <p>21-23 rd {t("hello11")}</p>
                <h3>{t("hello13")}</h3>
              </div>
            </Fade>
            <Fade left cascade>
              <div className="towerThree">
                <p>7-20 th {t("hello11")}</p>
                <h3>{t("hello14")}</h3>
              </div>
            </Fade>
            <Fade left cascade>
              <div className="towerFour">
                <p>6th {t("hello11")}</p>
                <h3>{t("hello15")}</h3>
              </div>
            </Fade>
            <Fade left cascade>
              <div className="towerFive">
                <p>5th {t("hello11")}</p>
                <h3>{t("hello16")}</h3>
              </div>
            </Fade>
            <Fade left cascade>
              <div className="towerSix">
                <p>2-4th {t("hello11")}</p>
                <h3>{t("hello17")} </h3>
              </div>
            </Fade>
            <Fade left cascade>
              <div className="towerSeven">
                <p>1st {t("hello11")}</p>
                <h3>{t("hello18")}</h3>
              </div>
            </Fade>
            <Fade left cascade>
              <div className="towerEight">
                <p>1st {t("hello11")}</p>
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
    </div>
  );
}

export default Tower;
