import React from "react";
import styles from "./Layout.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import './style.css'

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
          <div className="aboutLeft">
            <img src={layout.image1} alt="" className="layoutsIcon" />
          </div>
          <div className="aboutRight">
            <div className="aboutTop">
              <h3>{layout.name}</h3>
              <span>
                <p>Hall</p>
                <p>{layout.hall} m</p>
              </span>
              <span>
                <p>Bedroom</p>
                <p>{layout.bedroom} m</p>
              </span>
              <span>
                <p>Hallway</p>
                <p>{layout.hallway} m</p>
              </span>
              <span>
                <p>Bathroom</p>
                <p>{layout.bethroom} m</p>
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
        </div>
      </div>
    </div>
  );
}

export default About;
