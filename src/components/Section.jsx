import React from "react";
import styles from "./Gallery.module.css";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Section() {
  const [count, setCount] = useState(false);
  return (
    <div className={styles.section}>
      <div className="container">
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}>
          <div className={styles.sectionList}>
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionName}>
                {count && (
                  <CountUp start={0} duration={2.75} end="24" delay={0} />
                )}
              </h3>
              <p>Floors</p>
            </div>
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionName}>
                {count && (
                  <CountUp start={0} duration={2.75} end="96" delay={0} />
                )}
              </h3>
              <p>m</p>
            </div>
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionName}>
                {count && (
                  <CountUp start={0} duration={2.75} end="5" delay={0} />
                )}
              </h3>
              <p>
                elevat <br /> ors
              </p>
            </div>
            <div className={styles.sectionItem}>
              <h3 className={styles.sectionName}>
                {count && (
                  <CountUp start={0} duration={2.75} end="6" delay={0} />
                )}
              </h3>
              <p>
                penthou <br /> ses with terrace
              </p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Section;
