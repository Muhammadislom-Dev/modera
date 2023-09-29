import React from "react";
import Navbar from "./Navbar";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import "./style.css";
import "./animation.css";

function Header({ setOpen, open }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="BgImage">
        <Navbar open={open} setOpen={setOpen} />
        <div className="header">
          <div className="container-fluid">
            <Fade left cascade>
              <div>
                <h2 className="headerName">{t("multi")}</h2>
                <h2 className="headerName">{t("functional")}</h2>
                <h2 className="headerName">{t("complex")}</h2>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="BgImageTwo">
        <Navbar open={open} setOpen={setOpen} />
        <div className="header">
          <div className="container">
            <Fade left cascade>
              <div>
                <h2 className="headerName">{t("multi")}</h2>
                <h2 className="headerName">{t("functional")}</h2>
                <h2 className="headerName">{t("complex")}</h2>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
