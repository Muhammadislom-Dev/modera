import React from "react";
import Image1 from "../assets/img1.png";
import Image2 from "../assets/img2.png";
import Image3 from "../assets/img3.png";
import Image4 from "../assets/img4.png";
import Image5 from "../assets/img5.png";
import Image6 from "../assets/img6.png";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import "./style.css";
import { Bounce, Slide, Zoom } from "react-reveal";

function Gallery() {
  const { t } = useTranslation();
  return (
    <div id="offer" className="gallery">
      <div className="container">
        <h1 className="galleryName">{t("offers")}</h1>
        <div className="galleryList">
          <Zoom top>
            <img src={Image1} alt="Gallery Image 1" className="galeryImage" />
          </Zoom>
          <Zoom top>
            <img src={Image2} alt="Gallery Image 2" className="galeryImage" />
          </Zoom>
          <Bounce left>
            <img src={Image3} alt="Gallery Image 3" className="galeryImage" />
          </Bounce>
          <Bounce right>
            <img src={Image4} alt="Gallery Image 4" className="galeryImage" />
          </Bounce>
          <Slide bottom>
            <img src={Image5} alt="Gallery Image 5" className="galeryImage" />
          </Slide>
          <Slide bottom>
            <img src={Image6} alt="Gallery Image 6" className="galeryImage" />
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
