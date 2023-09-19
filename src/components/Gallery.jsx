import React from "react";
import styles from "./Gallery.module.css";
import Image1 from "../assets/img1.png";
import Image2 from "../assets/img2.png";
import Image3 from "../assets/img3.png";
import Image4 from "../assets/img4.png";
import Image5 from "../assets/img5.png";
import Image6 from "../assets/img6.png";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import "../App.css";

function Gallery() {
  const { t } = useTranslation();
  return (
    <div className={styles.gallery}>
      <div className="container">
        <h1 className={styles.galleryName}>{t("offers")}</h1>
        <Fade bottom cascade>
          <div className={styles.galleryList}>
            <img
              src={Image1}
              alt="Gallery Image 1"
              className={styles.galeryImage}
            />
            <img
              src={Image2}
              alt="Gallery Image 2"
              className={styles.galeryImage}
            />
            <img
              src={Image3}
              alt="Gallery Image 3"
              className={styles.galeryImage}
            />
            <img
              src={Image4}
              alt="Gallery Image 4"
              className={styles.galeryImage}
            />
            <img
              src={Image5}
              alt="Gallery Image 5"
              className={styles.galeryImage}
            />
            <img
              src={Image6}
              alt="Gallery Image 6"
              className={styles.galeryImage}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Gallery;
