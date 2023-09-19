import React from "react";
import styles from "./Gallery.module-v2.css"
import Tower from "../assets/tower.png";
import { useTranslation } from "react-i18next";
import '../App.css'

function Company() {
  const { t } = useTranslation();
  return (
    <div className={styles.company}>
      <div className="container container-fluid">
        <div className={styles.companyList}>
          <img src={Tower} alt="Modera Tower" className={styles.companyImage} />
          <p className={styles.companyText}>{t("companyText")}</p>
        </div>
      </div>
    </div>
  );
}

export default Company;
