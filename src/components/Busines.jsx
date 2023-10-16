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
  const businesNameRefs = [];
  const textspanRefs = [];
  const [t, i18next] = useTranslation();
  const [isVcdActive, setIsVcdActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let scrolling = window.scrollY;
      if (
        scrolling >= 2500 ||
        scrolling >= 2200 ||
        scrolling >= 1800 ||
        scrolling >= 2000 ||
        scrolling >= 2100 ||
        scrolling >= 2300 ||
        scrolling >= 2500 ||
        scrolling >= 2700 ||
        scrolling >= 2900 ||
        scrolling >= 3100 ||
        scrolling >= 3300 ||
        scrolling >= 3500 ||
        scrolling >= 3700 ||
        scrolling >= 3900 ||
        scrolling >= 4200 ||
        scrolling >= 4600
      ) {
        for (const el of businesNameRefs) {
          el.classList.add("vcd4");
        }
        for (const el of textspanRefs) {
          el.classList.add("vcd4");
        }
      } else {
        for (const el of businesNameRefs) {
          el.classList.remove("vcd4");
        }
        for (const el of textspanRefs) {
          el.classList.remove("vcd4");
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
          <SwiperSlide key={evt.id} className="businesItem">
            <div>
              <img src={evt.img} alt="" />
              <div className="busines-item">
                <h2
                  ref={(el) => {
                    if (el) {
                      businesNameRefs.push(el);
                    }
                  }}
                  style={{ display: "flex" }}
                  className="businesName">
                  {evt[`title_${i18next.language}`]
                    .split("  ")
                    .map((char, index) => (
                      <span
                        ref={(el) => {
                          if (el) {
                            textspanRefs.push(el);
                          }
                        }}
                        className="textspan"
                        key={index}>
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
          <div key={evt.id} className="businesItem">
            <Fade bottom>
              <div key={evt.id}>
                <img src={evt.img} alt="" />
                <div className="busines-items">
                 
                  <h2
                    ref={(el) => {
                      if (el) {
                        businesNameRefs.push(el);
                      }
                    }}
                    style={{ display: "flex", gap: "0 5px" }}
                    className="businesName">
                    {evt[`title_${i18next.language}`]
                      .split(" ")
                      .map((char, index) => (
                        <span
                          ref={(el) => {
                            if (el) {
                              textspanRefs.push(el);
                            }
                          }}
                          className="textspan"
                          key={index}>
                          {char}
                        </span>
                      ))}
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
