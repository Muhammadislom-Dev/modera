import React from "react";
import styles from "./Gallery.module.css";
import Navbar from "./Navbar";

function HeaderModal() {
  return (
    <div className={styles.headermodal}>
      <Navbar />
      <div className="container container-fluid">
        <div className={styles.headerModalList}>
          <h1>
            YOUR <br /> <h2>FUTURE</h2> PLACE
          </h1>
          <div className={styles.headerModalItem}>
            <h4>MENU</h4>
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
