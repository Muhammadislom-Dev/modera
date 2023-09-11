import React from "react";
import styles from "./Layout/Layout.module.css";
import About from "./Layout/About";
import Navbar from "./Layout/Navbar";
import Form from "./Layout/Form";

function LayoutAbout() {
  return (
    <>
      <Navbar />
      <About />
      <Form />
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomList}>
            <a href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d">
              FACEBOOK
            </a>
            <a href="https://instagram.com/moderatowers?igshid=MzRlODBiNWFlZA==">
              INSTAGRAM
            </a>
            <a href="https://t.me/moderatowers">TELEGRAM</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutAbout;
