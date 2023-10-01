import React from "react";
import MenuLogo from "../assets/menu-logo.png";
import Modera from "../assets/modera.png";
import Phone1 from "../assets/img/icon-phone.svg";
import Facebook1 from "../assets/img/icon-facebook.svg";
import Instagram1 from "../assets/img/icon-instagram.svg";
import Telegram1 from "../assets/img/icon-telegram.svg";
import Location1 from "../assets/img/icon-location.svg";
import { useTranslation } from "react-i18next";
import { Fade, Zoom } from "react-reveal";
import "./style.css";
import { useEffect } from "react";
import { useState } from "react";
import "./animation.css";

function Contact() {
  const { t } = useTranslation();
  const [isVcdActive, setIsVcdActive] = useState(false);
  useEffect(() => {
    const fathEl = document.querySelector(".contactName");
    const childEls = fathEl?.querySelectorAll(".textspan");

    const handleScroll = () => {
      let scrolling = window.scrollY;
      if (scrolling >= 6300 || scrolling >= 6000 || scrolling >= 7400) {
        if (!isVcdActive) {
          setIsVcdActive(true);
          for (const el of childEls) {
            el.classList.add("vcd2");
          }
        }
      } else {
        if (isVcdActive) {
          setIsVcdActive(false);
          for (const el of childEls) {
            el.classList.remove("vcd2");
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
      <div id="contact" className="contact">
        <div className="container">
          <h2 style={{ display: "flex" }} className="contactName">
            {t("contact")
              .split("")
              .map((char, index) => (
                <span className="textspan" key={index}>
                  {char}
                </span>
              ))}{" "}
          </h2>
          <img src={MenuLogo} alt="Logo" className="menuLogo" />
          <Fade bottom>
            <div className="moderaItem">
              <img src={Modera} alt="Modera Image" className="contactImage" />
            </div>
          </Fade>
          <div className="moderaList">
            <a href="tel:+998940007777" className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none">
                <path
                  d="M35.2236 18.1301H44.7443M44.7443 18.1301L39.984 13.3698M44.7443 18.1301L39.984 22.8904"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.74805 41.1491V16.8013C1.74805 8.39704 8.5611 1.58398 16.9654 1.58398H41.3132C49.7174 1.58398 56.5306 8.39704 56.5306 16.8013V41.1491C56.5306 49.5534 49.7174 56.3665 41.3132 56.3665H16.9654C8.5611 56.3665 1.74805 49.5534 1.74805 41.1491Z"
                  stroke="#2A1844"
                  stroke-width="3"
                />
                <path
                  d="M38.5853 33.525L32.0507 34.7912C27.6367 32.5758 24.9102 30.0309 23.3234 26.064L24.5451 19.5104L22.2357 13.3698H16.2838C14.4947 13.3698 13.0857 14.8483 13.353 16.6174C14.02 21.0339 15.987 29.0415 21.7366 34.7912C27.7746 40.8292 36.4709 43.4493 41.2571 44.4907C43.1054 44.893 44.7449 43.4511 44.7449 41.5596V35.8721L38.5853 33.525Z"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d"
              className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none">
                <path
                  d="M56.5306 16.8386V41.1864C56.5306 49.5906 49.7174 56.4037 41.3132 56.4037H16.9654C8.5611 56.4037 1.74805 49.5906 1.74805 41.1864V16.8386C1.74805 8.43427 8.5611 1.62122 16.9654 1.62122H41.3132C49.7174 1.62122 56.5306 8.43427 56.5306 16.8386Z"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.0957 56.4039C26.0957 47.2735 26.0957 38.1431 26.0957 29.0126C26.0957 22.355 27.6174 16.8387 38.2696 16.8387"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0088 32.0562H26.0957H38.2696"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com/moderatowers?igshid=MzRlODBiNWFlZA=="
              className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none">
                <path
                  d="M29.1397 41.2233C35.8631 41.2233 41.3136 35.7727 41.3136 29.0494C41.3136 22.3259 35.8631 16.8755 29.1397 16.8755C22.4163 16.8755 16.9658 22.3259 16.9658 29.0494C16.9658 35.7727 22.4163 41.2233 29.1397 41.2233Z"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.74805 41.2234V16.8756C1.74805 8.47126 8.5611 1.6582 16.9654 1.6582H41.3132C49.7174 1.6582 56.5306 8.47126 56.5306 16.8756V41.2234C56.5306 49.6276 49.7174 56.4407 41.3132 56.4407H16.9654C8.5611 56.4407 1.74805 49.6276 1.74805 41.2234Z"
                  stroke="#2A1844"
                  stroke-width="3"
                />
                <path
                  d="M45.8779 12.3413L45.9088 12.307"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a href="https://t.me/moderatowers" className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none">
                <path
                  d="M1.74805 41.2606V16.9128C1.74805 8.50849 8.5611 1.69543 16.9654 1.69543H41.3132C49.7174 1.69543 56.5306 8.50849 56.5306 16.9128V41.2606C56.5306 49.6648 49.7174 56.4779 41.3132 56.4779H16.9654C8.5611 56.4779 1.74805 49.6648 1.74805 41.2606Z"
                  stroke="#2A1844"
                  stroke-width="3"
                />
                <path
                  d="M45.0715 17.3389L9.46289 29.6649L21.789 33.7736M45.0715 17.3389L21.789 33.7736M45.0715 17.3389L34.115 46.0997L21.789 33.7736"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://maps.app.goo.gl/81xuBj2eNQrri92d7"
              className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="59"
                viewBox="0 0 59 59"
                fill="none">
                <path
                  d="M1.74805 41.2979V16.9502C1.74805 8.54585 8.5611 1.73279 16.9654 1.73279H41.3132C49.7174 1.73279 56.5306 8.54585 56.5306 16.9502V41.2979C56.5306 49.7022 49.7174 56.5153 41.3132 56.5153H16.9654C8.5611 56.5153 1.74805 49.7022 1.74805 41.2979Z"
                  stroke="#2A1844"
                  stroke-width="3"
                />
                <path
                  d="M29.3837 27.3943C31.2007 27.3943 32.6737 26.0686 32.6737 24.4333C32.6737 22.798 31.2007 21.4724 29.3837 21.4724C27.5667 21.4724 26.0938 22.798 26.0938 24.4333C26.0938 26.0686 27.5667 27.3943 29.3837 27.3943Z"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.3836 14.8926C23.9346 14.8926 19.5137 19.0681 19.5137 24.2109C19.5137 30.1284 26.0936 39.5059 28.5097 42.7449C28.6099 42.8816 28.7414 42.9928 28.8933 43.0696C29.0451 43.1463 29.2131 43.1862 29.3836 43.1862C29.554 43.1862 29.722 43.1463 29.8738 43.0696C30.0257 42.9928 30.1572 42.8816 30.2575 42.7449C32.6735 39.5073 39.2534 30.1331 39.2534 24.2109C39.2534 19.0681 34.8326 14.8926 29.3836 14.8926Z"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>

            <a href="tel:+998940007777" className="moderaLinks">
              <img src={Phone1} alt="Phone" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d"
              className="moderaLinks">
              <img src={Facebook1} alt="Phone" className="modera-icon" />
            </a>
            <a
              href="https://instagram.com/moderatowers?igshid=MzRlODBiNWFlZA=="
              className="moderaLinks">
              <img src={Instagram1} alt="Phone" className="modera-icon" />
            </a>
            <a href="https://t.me/moderatowers" className="moderaLinks">
              <img src={Telegram1} alt="Phone" className="modera-icon" />
            </a>
            <a
              href="https://maps.app.goo.gl/81xuBj2eNQrri92d7"
              className="moderaLinks">
              <img src={Location1} alt="Phone" className="modera-icon" />
            </a>
          </div>
          <div className="contactList">
            <a href="tel:+998940007777" className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none">
                <path
                  d="M35.2236 18.1301H44.7443M44.7443 18.1301L39.984 13.3698M44.7443 18.1301L39.984 22.8904"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.74805 41.1491V16.8013C1.74805 8.39704 8.5611 1.58398 16.9654 1.58398H41.3132C49.7174 1.58398 56.5306 8.39704 56.5306 16.8013V41.1491C56.5306 49.5534 49.7174 56.3665 41.3132 56.3665H16.9654C8.5611 56.3665 1.74805 49.5534 1.74805 41.1491Z"
                  stroke="#2A1844"
                  stroke-width="3"
                />
                <path
                  d="M38.5853 33.525L32.0507 34.7912C27.6367 32.5758 24.9102 30.0309 23.3234 26.064L24.5451 19.5104L22.2357 13.3698H16.2838C14.4947 13.3698 13.0857 14.8483 13.353 16.6174C14.02 21.0339 15.987 29.0415 21.7366 34.7912C27.7746 40.8292 36.4709 43.4493 41.2571 44.4907C43.1054 44.893 44.7449 43.4511 44.7449 41.5596V35.8721L38.5853 33.525Z"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d"
              className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none">
                <path
                  d="M56.5306 16.8386V41.1864C56.5306 49.5906 49.7174 56.4037 41.3132 56.4037H16.9654C8.5611 56.4037 1.74805 49.5906 1.74805 41.1864V16.8386C1.74805 8.43427 8.5611 1.62122 16.9654 1.62122H41.3132C49.7174 1.62122 56.5306 8.43427 56.5306 16.8386Z"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.0957 56.4039C26.0957 47.2735 26.0957 38.1431 26.0957 29.0126C26.0957 22.355 27.6174 16.8387 38.2696 16.8387"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0088 32.0562H26.0957H38.2696"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://instagram.com/moderatowers?igshid=MzRlODBiNWFlZA=="
              className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none">
                <path
                  d="M29.1397 41.2233C35.8631 41.2233 41.3136 35.7727 41.3136 29.0494C41.3136 22.3259 35.8631 16.8755 29.1397 16.8755C22.4163 16.8755 16.9658 22.3259 16.9658 29.0494C16.9658 35.7727 22.4163 41.2233 29.1397 41.2233Z"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.74805 41.2234V16.8756C1.74805 8.47126 8.5611 1.6582 16.9654 1.6582H41.3132C49.7174 1.6582 56.5306 8.47126 56.5306 16.8756V41.2234C56.5306 49.6276 49.7174 56.4407 41.3132 56.4407H16.9654C8.5611 56.4407 1.74805 49.6276 1.74805 41.2234Z"
                  stroke="#2A1844"
                  stroke-width="3"
                />
                <path
                  d="M45.8779 12.3413L45.9088 12.307"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a href="https://t.me/moderatowers" className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none">
                <path
                  d="M1.74805 41.2606V16.9128C1.74805 8.50849 8.5611 1.69543 16.9654 1.69543H41.3132C49.7174 1.69543 56.5306 8.50849 56.5306 16.9128V41.2606C56.5306 49.6648 49.7174 56.4779 41.3132 56.4779H16.9654C8.5611 56.4779 1.74805 49.6648 1.74805 41.2606Z"
                  stroke="#2A1844"
                  stroke-width="3"
                />
                <path
                  d="M45.0715 17.3389L9.46289 29.6649L21.789 33.7736M45.0715 17.3389L21.789 33.7736M45.0715 17.3389L34.115 46.0997L21.789 33.7736"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
            <a
              href="https://maps.app.goo.gl/81xuBj2eNQrri92d7"
              className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="59"
                viewBox="0 0 59 59"
                fill="none">
                <path
                  d="M1.74805 41.2979V16.9502C1.74805 8.54585 8.5611 1.73279 16.9654 1.73279H41.3132C49.7174 1.73279 56.5306 8.54585 56.5306 16.9502V41.2979C56.5306 49.7022 49.7174 56.5153 41.3132 56.5153H16.9654C8.5611 56.5153 1.74805 49.7022 1.74805 41.2979Z"
                  stroke="#2A1844"
                  stroke-width="3"
                />
                <path
                  d="M29.3837 27.3943C31.2007 27.3943 32.6737 26.0686 32.6737 24.4333C32.6737 22.798 31.2007 21.4724 29.3837 21.4724C27.5667 21.4724 26.0938 22.798 26.0938 24.4333C26.0938 26.0686 27.5667 27.3943 29.3837 27.3943Z"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M29.3836 14.8926C23.9346 14.8926 19.5137 19.0681 19.5137 24.2109C19.5137 30.1284 26.0936 39.5059 28.5097 42.7449C28.6099 42.8816 28.7414 42.9928 28.8933 43.0696C29.0451 43.1463 29.2131 43.1862 29.3836 43.1862C29.554 43.1862 29.722 43.1463 29.8738 43.0696C30.0257 42.9928 30.1572 42.8816 30.2575 42.7449C32.6735 39.5073 39.2534 30.1331 39.2534 24.2109C39.2534 19.0681 34.8326 14.8926 29.3836 14.8926Z"
                  stroke="#2A1844"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <a href="tel:+998901693527">{t("hello20")}</a>
      </div>
    </>
  );
}

export default Contact;
