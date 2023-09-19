import React from "react";
import styles from "./Gallery.module.css";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";
import "../App.css";

function Section() {
  const [count, setCount] = useState(false);
  const { t } = useTranslation();
  return (
    <div className={styles.section}>
      <div className="container">
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}>
          <div className={styles.sectionList}>
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionName}>
                {count && (
                  <CountUp start={0} duration={2.75} end="24" delay={0} />
                )}
              </h3>
              <p>{t("hello6")}</p>
            </div>
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionName}>
                {count && (
                  <CountUp start={0} duration={2.75} end="96" delay={0} />
                )}
              </h3>
              <p>m</p>
            </div>
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionName}>
                {count && (
                  <CountUp start={0} duration={2.75} end="5" delay={0} />
                )}
              </h3>
              <p>
                {t("hello7")} <br /> {t("hello8")}
              </p>
            </div>
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionName}>
                {count && (
                  <CountUp start={0} duration={2.75} end="6" delay={0} />
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
