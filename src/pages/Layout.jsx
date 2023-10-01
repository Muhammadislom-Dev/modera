import React from "react";
import styles from "./Layout/Layout.module.css";
import About from "./Layout/About";
import Navbar from "./Layout/Navbar";
import Form from "./Layout/Form";
import "../components/style.css";

function LayoutAbout({ open, handleClose, handleOpen }) {
  return (
    <>
      <Navbar open={open} handleClose={handleClose} handleOpen={handleOpen} />
      <About />
      <Form />
      <div className="bottom">
        <div className="container">
          <div className="bottomList">
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

export default LayoutAbout;
