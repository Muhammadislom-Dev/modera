import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./style.css";
import { Fade } from "react-reveal";

function About() {
  const { id } = useParams();
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    axios.get("https://modera.dipsag.uz/layout/").then((res) => {
      console.log(res);
      setLayout(res.data.filter((evt) => evt.apartment === Number(id)));
    });
  }, [id]);

  console.log(layout);

  return (
    <div className="about">
      <div className="container">
        {layout.map((evt, index) => (
          <div className="aboutList">
            <Fade>
              <div className="aboutLeft">
                <img src={evt.image1} alt="" className="layoutsIcon" />
              </div>
            </Fade>
            <Fade right>
              <div className="aboutRight">
                <div className="aboutTop">
                  <h3>{evt.name}</h3>
                  <span>
                    <p>Студия</p>
                    <p>
                      {evt.hall} m<sup style={{ fontSize: "16px" }}>2</sup>
                    </p>
                  </span>
                  <span>
                    <p>Прихожая</p>
                    <p>
                      {evt.bedroom} m<sup style={{ fontSize: "16px" }}>2</sup>
                    </p>
                  </span>
                  <span>
                    <p>Санузел</p>
                    <p>
                      {evt.hallway} m<sup style={{ fontSize: "16px" }}>2</sup>
                    </p>
                  </span>
                  {evt.bethroom == "0" ? (
                    ""
                  ) : (
                    <span style={{ marginBottom: "10px" }}>
                      <p>Спальня</p>
                      <p>
                        {evt.bethroom} m
                        <sup style={{ fontSize: "16px" }}>2</sup>
                      </p>
                    </span>
                  )}
                </div>
                <div className="aboutBottom">
                  <div className="aboutItem">
                    <img src={evt.image2} alt="" className="aboutIcon" />
                  </div>
                  <div className="aboutItem">
                    <img src={evt.image3} alt="" className="aboutIcon" />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
