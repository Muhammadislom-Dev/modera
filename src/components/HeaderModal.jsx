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
              <a href="#">{t("hello1")}</a>
              <a href="#">{t("hello2")}</a>
              <a href="#">{t("hello3")}</a>
              <a href="#">{t("hello4")}</a>
              <a href="#">{t("hello5")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderModal;
