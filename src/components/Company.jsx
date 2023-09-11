import React from "react";
import styles from "./Gallery.module.css";
import Tower from "../assets/tower.png";

function Company() {
  return (
    <div className={styles.company}>
      <div className="container">
        <div className={styles.companyList}>
          <img
            src={Tower}
            alt="Modera Tower"
            className={styles.companyImage}
          />
          <p className={styles.companyText}>
            Modera Towers is a multifunctional complex that combines residential
            real estate, a business center, a hotel, commercial space and
            everything you need for a comfortable life for its residents. The
            complex is located on one of the busiest streets of the capital, not
            far from Druzhba Park and many other iconic locations. Modera Towers
            is a solution for those who take care of their time, because by
            purchasing apartments, you can also buy or rent an office space of a
            convenient size for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Company;
