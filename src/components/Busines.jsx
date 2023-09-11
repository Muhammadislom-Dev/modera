import React from "react";
import styles from "./Gallery.module.css";
import Icon from "./Icon";
import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";

function Busines() {
  return (
    <div className={styles.busines}>
      <div className="container">
        <div className={styles.businesList}>
          <div className="businesItem">
            <img src={Image1} alt="" className="businesImage" />
            <h3>business center </h3>
            <p>
              From the 2nd to the 4th floors in the complex there will be a
              business center, where everyone can purchase a room.
            </p>
          </div>
          <div className="businesItem">
            <h3>YArd</h3>
            <p>
              The courtyard was designed at such a height for the greatest
              comfort of residents.
            </p>
            <img
              style={{ marginTop: "25px" }}
              src={Image2}
              alt=""
              className="businesImage"
            />
          </div>
          <div className="businesItem">
            <img src={Image3} alt="" className="businesImage" />
            <h3>Open-air pool </h3>
            <p style={{ width: "auto" }}>
              The outdoor and indoor pools will be equipped with a modern water
              purification system and a zone with sun loungers and located next
              to a spacious lounge area where you and your guests can find a
              place for relaxing in the shade and sunbathing.
            </p>
          </div>
        </div>
      </div>
      <Icon />
    </div>
  );
}

export default Busines;
