import React from "react";
import styles from "./Gallery.module-v2.css";
import Asset1 from "../assets/Asset 1.svg";
import Asset2 from "../assets/Asset 2.svg";
import Asset3 from "../assets/Asset 3.svg";
import Asset4 from "../assets/Asset 4.svg";
import Asset5 from "../assets/Asset 5.svg";
import Asset6 from "../assets/Asset 6.svg";
import "../App.css";

function Partner() {
  return (
    <div className={styles.partner}>
      <div className="container">
        <div className={styles.partnerList}>
          <img src={Asset1} alt="Icon 1" className={styles.partnerIcon} />
          <img src={Asset2} alt="Icon 1" className={styles.partnerIcon} />
          <img src={Asset3} alt="Icon 1" className={styles.partnerIcon} />
          <img src={Asset4} alt="Icon 1" className={styles.partnerIcon} />
          <img src={Asset5} alt="Icon 1" className={styles.partnerIcon} />
          <img src={Asset6} alt="Icon 1" className={styles.partnerIcon} />
        </div>
      </div>
    </div>
  );
}

export default Partner;
