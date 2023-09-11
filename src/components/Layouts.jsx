import React from "react";
import styles from "./Gallery.module.css";
import { Link } from "react-router-dom";
import Layer from "../assets/layer.png";

function Layouts() {
  return (
    <div className={styles.layouts}>
      <div className="container container-fluid">
        <h2 className={styles.layoutName}>Layouts</h2>
        <div className={styles.layoutsList}>
          <div className={styles.layoutsItem}>
            <Link className={styles.layoutsLink} to="/">
              Penthouses and terrace
            </Link>
            <Link className={styles.layoutsLink} to="/">
              Lounge area and yard
            </Link>
            <Link className={styles.layoutsLink} to="/">
              Bussiness center
            </Link>
            <Link className={styles.layoutsLink} to="/">
              Comercial zone
            </Link>
            <Link className={styles.layoutsLink} to="/">
              Apartment
            </Link>
          </div>
          <img src={Layer} alt="" className={styles.layoutsImage} />
        </div>
      </div>
    </div>
  );
}

export default Layouts;
