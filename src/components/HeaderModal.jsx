import React from "react";
import styles from "./Gallery.module.css";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";

function HeaderModal() {
  const { t } = useTranslation();
  return (
    <div className={styles.headermodal}>
      <Navbar />
      <div className="container container-fluid">
        <div className={styles.headerModalList}>
          <h1>
            {t("your")} <br /> <h2>{t("future")}</h2> {t("place")}
          </h1>
          <div className={styles.headerModalItem}>
            <h4>{t("menu")}</h4>
            <div className={styles.headerModalTop}>
              <a href="#">About</a>
              <a href="#">Layouts</a>
              <a href="#">We offer</a>
              <a href="#">Specification</a>
              <a href="#">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderModal;
