import React from "react";
import styles from "./Layout.module.css";

function About() {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.aboutList}>
          <div className={styles.aboutLeft}>
            <img src="/assets/image.png" alt="" className="layoutsIcon" />
          </div>
          <div className="aboutRight">
            <div className={styles.aboutTop}>
              <h3>Double room</h3>
              <span>
                <p>Hall</p>
                <p>28.91 m</p>
              </span>
              <span>
                <p>Bedroom</p>
                <p>28.91 m</p>
              </span>
              <span>
                <p>Hallway</p>
                <p>28.91 m</p>
              </span>
              <span>
                <p>Bathroom</p>
                <p>28.91 m</p>
              </span>
            </div>
            <div className={styles.aboutBottom}>
              <div className={styles.aboutItem}>
                <img
                  src="/assets/image.png"
                  alt=""
                  className={styles.aboutIcon}
                />
              </div>
              <div className={styles.aboutItem}>
                <img
                  src="/assets/image.png"
                  alt=""
                  className={styles.aboutIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
