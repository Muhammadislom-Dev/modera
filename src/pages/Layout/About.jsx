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
    axios
      .get(`https://modera.dipsag.uz/layout/${id}`)
      .then((res) => setLayout(res.data));
  }, [id]);

  return (
    <div className="about">
      <div className="container">
        <div className="aboutList">
          <Fade>
            <div className="aboutLeft">
              <img src={layout.image1} alt="" className="layoutsIcon" />
            </div>
          </Fade>
          <Fade right>
            <div className="aboutRight">
              <div className="aboutTop">
                <h3>{layout.name}</h3>
                <span>
                  <p>Hall</p>
                  <p>
                    {layout.hall} m<sup style={{ fontSize: "16px" }}>2</sup>
                  </p>
                </span>
                <span>
                  <p>Bedroom</p>
                  <p>
                    {layout.bedroom} m<sup style={{ fontSize: "16px" }}>2</sup>
                  </p>
                </span>
                <span>
                  <p>Hallway</p>
                  <p>
                    {layout.hallway} m<sup style={{ fontSize: "16px" }}>2</sup>
                  </p>
                </span>
                <span style={{ marginBottom: "10px" }}>
                  <p>Bathroom</p>
                  <p>
                    {layout.bethroom} m<sup style={{ fontSize: "16px" }}>2</sup>
                  </p>
                </span>
              </div>
              <div className="aboutBottom">
                <div className="aboutItem">
                  <img src={layout.image2} alt="" className="aboutIcon" />
                </div>
                <div className="aboutItem">
                  <img src={layout.image3} alt="" className="aboutIcon" />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default About;
