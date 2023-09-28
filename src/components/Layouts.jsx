import React from "react";
import { Link } from "react-router-dom";
import Layer from "../assets/layer.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Zoom } from "react-reveal";
import "./style.css";

function Layouts() {
  const [t, i18next] = useTranslation();
  const [category, setCategory] = useState([]);

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
          {/* {t("hello2")} */}
          <Zoom cascade>L</Zoom>
          <Zoom cascade>A</Zoom>
          <Zoom cascade>Y</Zoom>
          <Zoom cascade>O</Zoom>
          <Zoom cascade>U</Zoom>
          <Zoom cascade>T</Zoom>
          <Zoom cascade>S</Zoom>
        </h2>
        <div className="layoutsList">
          <div className="layoutsItem">
            {category?.map((evt) => (
              <Link
                key={evt.id}
                className="layoutsLink"
                to={`/layout/${evt?.id}`}>
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
