import React from "react";
import styles from "./Gallery.module.css";
import Navbar from "./Navbar";
import { Fade } from "react-reveal";

function Header({ setOpen, open }) {
  return (
    <div className={styles.BgImage}>
      <Navbar open={open} setOpen={setOpen} />
      <div className={styles.header}>
        <div className="container">
          <Fade left cascade>
            <div>
              <h2 className={styles.headerName}>multi</h2>
              <h2 className={styles.headerName}>functional</h2>
              <h2 className={styles.headerName}>complex</h2>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Header;
