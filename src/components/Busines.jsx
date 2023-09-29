import React from "react";
import { data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Fade } from "react-reveal";
import { useState } from "react";
import { useEffect } from "react";
import "./animation.css";

function Busines() {
  const [t, i18next] = useTranslation();
  const [isVcdActive, setIsVcdActive] = useState(false);
  useEffect(() => {
    const fathEl = document.querySelector(".businesName");
    const childEls = fathEl?.querySelectorAll(".textspan");

    const handleScroll = () => {
      let scrolling = window.scrollY;
      console.log(scrolling);
      if (scrolling >= 2650) {
        if (!isVcdActive) {
          setIsVcdActive(true);
          for (const el of childEls) {
            el.classList.add("vcd");
          }
        }
      } else {
        if (isVcdActive) {
          setIsVcdActive(false);
          for (const el of childEls) {
            el.classList.remove("vcd");
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
    <div className="busines">
      <Swiper
        direction={"horizontal"}
        freeMode={true}
        slidesPerView={3}
        spaceBetween={30}
        scrollbar={false}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        speed={2000}
        className="mySwiper">
        {data?.map((evt) => (
          <SwiperSlide className="businesItem">
            <div key={evt.id}>
              <img src={evt.img} alt="" />
              <div className="busines-item">
                <h2 style={{ display: "flex" }} className="businesName">
                  {evt[`title_${i18next.language}`]
                    .split("")
                    .map((char, index) => (
                      <span className="textspan" key={index}>
                        {char}
                      </span>
                    ))}
                </h2>
                <p className="businesText">{evt[`text_${i18next.language}`]}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mySwiperResponsive">
        {data.map((evt) => (
          <div className="businesItem">
            <Fade bottom>
              <div key={evt.id}>
                <img src={evt.img} alt="" />
                <div className="busines-items">
                  <h2 className="businesName">
                    {" "}
                    {evt[`title_${i18next.language}`]}
                  </h2>
                  <p className="businesText">
                    {evt[`text_${i18next.language}`]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Busines;
