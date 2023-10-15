import React from "react";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";
import "./style.css";

function Section() {
  const [count, setCount] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="section">
      <div className="container">
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}>
          <div className="sectionList">
            <div className="sectionItem">
              <h3 className="sectionName">
                {count && (
                  <CountUp start={0} duration={2.75} end="24" delay={0} />
                )}
              </h3>
              <p>{t("hello6")}</p>
            </div>
            <div className="sectionItem">
              <h3 className="sectionName">
                {count && (
                  <CountUp start={0} duration={2.75} end="96" delay={0} />
                )}
              </h3>
              <p>m</p>
            </div>
            <div className="sectionItem">
              <h3 className="sectionName">
                {count && (
                  <CountUp start={0} duration={2.75} end="16" delay={0} />
                )}
              </h3>
              <p>
                {t("hello7")} <br /> {t("hello8")}
              </p>
            </div>
            <div className="sectionItem">
              <h3 className="sectionName">
                {count && (
                  <CountUp start={0} duration={2.75} end="242" delay={0} />
                )}
              </h3>
              <p>
                {t("hello9")} <br /> {t("hello10")}
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Section;
