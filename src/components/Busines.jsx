import React from "react";
import styles from "./Gallery.module.css";
import Icon from "./Icon";
import { data } from "./data";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { useTranslation } from "react-i18next";

function Busines() {
  const [t, i18next] = useTranslation();
  return (
    <div className={styles.busines}>
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
          <SwiperSlide className={styles.businesItem}>
            <div key={evt.id}>
              <img src={evt.img} alt="" />
              <h2 className="businesName">
                {" "}
                {evt[`title_${i18next.language}`]}
              </h2>
              <p className="businesText">{evt[`text_${i18next.language}`]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Icon />
    </div>
  );
}

export default Busines;
