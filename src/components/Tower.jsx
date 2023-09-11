import React from "react";
import styles from "./Gallery.module.css";
import TowerImage from "../assets/tower.svg";

function Tower() {
  return (
    <div className={styles.tower}>
      <div style={{ display: "flex" }} className="container">
        <div className={styles.towerList}>
          <div className={styles.towerOne}>
            <span>24 th floor</span>
            <h3>Penthouses with terrace</h3>
          </div>
          <div className={styles.towerTwo}>
            <span>21-23 rd floor</span>
            <h3>Penthouses</h3>
          </div>
          <div className={styles.towerThree}>
            <span>7-20 th floor</span>
            <h3>Appartments</h3>
          </div>
          <div className={styles.towerFour}>
            <span>6th floor</span>
            <h3>Apartments / lounge area / yard</h3>
          </div>
          <div className={styles.towerFive}>
            <span>5th floor</span>
            <h3>Fitness/ lounge area</h3>
          </div>
          <div className={styles.towerSix}>
            <span>2-4th floor</span>
            <h3>Business center </h3>
          </div>
          <div className={styles.towerSeven}>
            <span>1st floor</span>
            <h3>Lobby</h3>
          </div>
          <div className={styles.towerEight}>
            <span>1st floor</span>
            <h3>Commercial zone</h3>
          </div>
        </div>
        <img
          src={TowerImage}
          alt="Modera Tower"
          className={styles.towerImage}
        />
      </div>
    </div>
  );
}

export default Tower;
