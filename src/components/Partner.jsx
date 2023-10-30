import React from "react";
import Asset1 from "../assets/Asset 1.svg";
import Asset2 from "../assets/Asset 2.svg";
import Asset3 from "../assets/Asset 3.svg";
import Asset4 from "../assets/Asset 4.svg";
import Asset5 from "../assets/Asset 5.svg";
import Asset6 from "../assets/Asset 6.svg";
import "./style.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

function Partner() {
  const { t } = useTranslation();
  var settings = {
    speed: 5000,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 7,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div id="specification" className="partner">
      <div className="container">
        <h1 className="partnerName">{t("partner")}</h1>
      </div>
      <div className="container container-fluids">
        <Slider {...settings}>
          <img src={Asset1} alt="Icon 1" className="partnerIcon" />
          <img src={Asset2} alt="Icon 1" className="partnerIcon" />
          <img src={Asset3} alt="Icon 1" className="partnerIcon" />
          <img src={Asset4} alt="Icon 1" className="partnerIcon" />
          <img src={Asset5} alt="Icon 1" className="partnerIcon" />
          <img src={Asset6} alt="Icon 1" className="partnerIcon" />
          <img src={Asset1} alt="Icon 1" className="partnerIcon" />
          <img src={Asset2} alt="Icon 1" className="partnerIcon" />
          <img src={Asset3} alt="Icon 1" className="partnerIcon" />
          <img src={Asset4} alt="Icon 1" className="partnerIcon" />
          <img src={Asset5} alt="Icon 1" className="partnerIcon" />
          <img src={Asset6} alt="Icon 1" className="partnerIcon" />
        </Slider>
      </div>
    </div>
  );
}

export default Partner;
