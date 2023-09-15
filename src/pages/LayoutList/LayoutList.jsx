import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Layout/Navbar";
import { Link, useParams } from "react-router-dom";
import styles from "../Layout/Layout.module.css";

function LayoutList() {
  const { id } = useParams();
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    axios
      .get("https://modera.dipsag.uz/layout/")
      .then((res) =>
        setLayout(res.data.filter((evt) => evt.apartment === Number(id)))
      );
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="layout-list">
        <div className="container">
          {layout.map((evt) => (
            <div className="layout-item">
              <Link to={`/layout-about/${evt.id}`}>
                <div className="layout-top">
                  <img src={evt.image1} alt={evt.apartment_name} />
                </div>
                <h3 className="layout-list-name">{evt.name}</h3>
                <span className="layout-list-span">
                  <p className="layout-list-text">Bedroom</p>
                  <p>{evt.bedroom} m</p>
                </span>
                <span className="layout-list-span">
                  <p className="layout-list-text">Bathroom</p>
                  <p>{evt.bethroom} m</p>
                </span>
                <span className="layout-list-span">
                  <p className="layout-list-text">Hall</p>
                  <p>{evt.hall} m</p>
                </span>
                <span className="layout-list-span">
                  <p className="layout-list-text">Hallway</p>
                  <p>{evt.hallway} m</p>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomList}>
            <a href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d">
              FACEBOOK
            </a>
            <a href="https://instagram.com/moderatowers?igshid=MzRlODBiNWFlZA==">
              INSTAGRAM
            </a>
            <a href="https://t.me/moderatowers">TELEGRAM</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutList;
