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
import { useState } from "react";
import { useEffect } from "react";
import "./animation.css";

function Gallery() {
  const { t } = useTranslation();
  const [isVcdActive, setIsVcdActive] = useState(false);
  useEffect(() => {
    const fathEl = document.querySelector(".galleryName");
    const childEls = fathEl?.querySelectorAll(".textspan");

    const handleScroll = () => {
      let scrolling = window.scrollY;
      if (scrolling >= 3800) {
        if (!isVcdActive) {
          setIsVcdActive(true);
          for (const el of childEls) {
            el.classList.add("vcd1");
          }
        }
      } else {
        if (isVcdActive) {
          setIsVcdActive(false);
          for (const el of childEls) {
            el.classList.remove("vcd1");
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div id="offer" className="gallery">
        <div className="container">
          <h1 className="galleryName">
            {/* {t("offers")}{" "} */}
            {t("offers")
              .split("")
              .map((char, index) => (
                <span className="textspan" key={index}>
                  {char}
                </span>
              ))}{" "}
          </h1>
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
    </>
  );
}

export default Gallery;
