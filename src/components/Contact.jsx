import React from "react";
import styles from "./Gallery.module.css";
import MenuLogo from "../assets/menu-logo.png";
import Modera from "../assets/modera.png";
import Phone from "../assets/phone.svg";
import Facebook from "../assets/phone.svg";
import Instagram from "../assets/instagram.svg";
import Telegram from "../assets/telegram.svg";
import Location from "../assets/location.svg";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.contact}>
        <div className="container">
          <h2 className={styles.contactName}>{t("Contacts")}</h2>
          <img src={MenuLogo} alt="Logo" className={styles.menuLogo} />
          <div className={styles.moderaItem}>
            <img
              src={Modera}
              alt="Modera Image"
              className={styles.contactImage}
            />
          </div>
          <div className={styles.moderaList}>
            <a href="tel:+998940007777" className="moderaLink">
              <img src={Phone} alt="Phone" className="modera-icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d"
              className="moderaLink">
              <img src={Facebook} alt="Phone" className="modera-icon" />
            </a>
            <a
              href="https://instagram.com/moderatowers?igshid=MzRlODBiNWFlZA=="
              className="moderaLink">
              <img src={Instagram} alt="Phone" className="modera-icon" />
            </a>
            <a href="https://t.me/moderatowers" className="moderaLink">
              <img src={Telegram} alt="Phone" className="modera-icon" />
            </a>
            <a
              href="https://maps.app.goo.gl/81xuBj2eNQrri92d7"
              className="moderaLink">
              <img src={Location} alt="Phone" className="modera-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </>
  );
}

export default Contact;
