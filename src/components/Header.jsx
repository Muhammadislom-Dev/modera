import React from "react";
import styles from "./Gallery.module.css";
import Navbar from "./Navbar";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

function Header({ setOpen, open }) {
  const { t } = useTranslation();
  return (
    <div className={styles.BgImage}>
      <Navbar open={open} setOpen={setOpen} />
      <div className={styles.header}>
        <div className="container">
          <Fade left cascade>
            <div>
              <h2 className={styles.headerName}>{t("multi")}</h2>
              <h2 className={styles.headerName}>{t("functional")}</h2>
              <h2 className={styles.headerName}>{t("complex")}</h2>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Header;
