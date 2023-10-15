import React from "react";
import { Link } from "react-router-dom";
import Layer from "../assets/layer.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Zoom } from "react-reveal";
import "./style.css";
import "./animation.css";

function Layouts() {
  const [t, i18next] = useTranslation();
  const [category, setCategory] = useState([]);
  const [isVcdActive, setIsVcdActive] = useState(false);
  useEffect(() => {
    const fathEl = document.querySelector(".layoutName");
    const childEls = fathEl?.querySelectorAll(".textspan");

    const handleScroll = () => {
      let scrolling = window.scrollY;
      if (scrolling >= 2900 || scrolling >= 2800 || scrolling >= 4600) {
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
  useEffect(() => {
    axios
      .get("https://modera.dipsag.uz/category/")
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="layout" className="layouts">
      <div className="container container-fluid">
        <h2 style={{ display: "flex" }} className="layoutName">
          {t("hello2")
            .split("")
            .map((char, index) => (
              <span className="textspan" key={index}>
                {char}
              </span>
            ))}{" "}
        </h2>
        <div className="layoutsList">
          <div className="layoutsItem">
            {category?.map((evt) => (
              <Link
                key={evt.id}
                className="layoutsLink"
                to={`/layout-about/${evt?.id}`}>
                {evt[`name_${i18next.language}`]}
              </Link>
            ))}
          </div>
          <img src={Layer} alt="" className="layoutsImage" />
        </div>
      </div>
    </div>
  );
}

export default Layouts;
