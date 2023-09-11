import React from "react";
import styles from "./Gallery.module.css";

function Section() {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.sectionList}>
          <div className={styles.sectionItem}>
            <h3 className={styles.sectionName}>24</h3>
            <p>Floors</p>
          </div>
          <div className={styles.sectionItem}>
            <h3 className={styles.sectionName}>96</h3>
            <p>m</p>
          </div>
          <div className={styles.sectionItem}>
            <h3 className={styles.sectionName}>5</h3>
            <p>
              elevat <br /> ors
            </p>
          </div>
          <div className={styles.sectionItem}>
            <h3 className={styles.sectionName}>6</h3>
            <p>
              penthou <br /> ses with terrace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
