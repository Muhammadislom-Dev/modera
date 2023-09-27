import React from "react";
import Image1 from "../assets/img1.png";
import Image2 from "../assets/img2.png";
import Image3 from "../assets/img3.png";
import Image4 from "../assets/img4.png";
import Image5 from "../assets/img5.png";
import Image6 from "../assets/img6.png";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Bounce, Slide, Zoom } from "react-reveal";

function Gallery() {
  const { t } = useTranslation();
  return (
    <div id="offer" className="gallery">
      <div className="container">
        <h1 className="galleryName">{t("offers")}</h1>
        <div className="galleryList">
          <img
            data-aos="fade-down-right"
            src={Image1}
            alt="Gallery Image 1"
            className="galeryImage"
          />
          <div style={{ width: "100%" }} className="gallery-items">
            <img
              data-aos="fade-down-left"
              src={Image2}
              alt="Gallery Image 2"
              className="galeryImage"
            />
          </div>
          <img
            data-aos="zoom-in"
            src={Image3}
            alt="Gallery Image 3"
            className="galeryImage"
          />
          <div style={{ width: "100%" }} className="gallery-items">
            <img
              data-aos="zoom-in-left"
              src={Image4}
              alt="Gallery Image 4"
              className="galeryImage"
            />
          </div>
          <img
            data-aos="fade-right"
            src={Image5}
            alt="Gallery Image 5"
            className="galeryImage"
          />
          <div style={{ width: "100%" }} className="gallery-items">
            <img
              data-aos="fade-left"
              src={Image6}
              alt="Gallery Image 6"
              className="galeryImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
