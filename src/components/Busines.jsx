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

function Busines() {
  const [t, i18next] = useTranslation();
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
                <h2 className="businesName">
                  {evt[`title_${i18next.language}`]}
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
