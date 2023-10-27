import React from "react";
import { useTranslation } from "react-i18next";
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
          <div className="container">
            <a href="tel:+998940007777" className="footer-link">
              +998 94 000 77 77
            </a>
            <p
              style={{ textAlign: "center", color: "#fff", padding: "10px 0" }}
              className="footer-text">
              {t("location")}
            </p>
            <div className="footer-list">
              <a
                href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d"
                className="footer-links">
                Facebook
              </a>
              <a
                href="https://instagram.com/moderatowers?igshid=MzRlODBiNWFlZA=="
                className="footer-links">
                Instagram
              </a>
              <a href="https://t.me/moderatowers" className="footer-links">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
