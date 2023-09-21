import React from "react";
import MenuLogo from "../assets/menu-logo.png";
import Modera from "../assets/modera.png";
import Phone from "../assets/phone.svg";
import Instagram from "../assets/instagram.svg";
import Telegram from "../assets/telegram.svg";
import Location from "../assets/location.svg";
import Phone1 from "../assets/icon-phone.svg";
import Facebook1 from "../assets/icon-facebook.svg";
import Instagram1 from "../assets/icon-instragram.svg";
import Telegram1 from "../assets/icon-telegram.svg";
import Location1 from "../assets/icon-location.svg";
import { useTranslation } from "react-i18next";
import "./style.css";

function Contact() {
  const { t } = useTranslation();
  return (
    <>
      <div id="contact" className="contact">
        <div className="container">
          <h2 className="contactName">{t("Contacts")}</h2>
          <img src={MenuLogo} alt="Logo" className="menuLogo" />
          <div className="moderaItem">
            <img src={Modera} alt="Modera Image" className="contactImage" />
          </div>
          <div className="moderaList">
            <a href="tel:+998940007777" className="moderaLink">
              <img src={Phone} alt="Phone" className="modera-icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d"
              className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none">
                <path
                  d="M56.5306 16.8385V41.1862C56.5306 49.5905 49.7174 56.4036 41.3132 56.4036H16.9654C8.5611 56.4036 1.74805 49.5905 1.74805 41.1862V16.8385C1.74805 8.43415 8.5611 1.62109 16.9654 1.62109H41.3132C49.7174 1.62109 56.5306 8.43415 56.5306 16.8385Z"
                  stroke="#8062D6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.0958 56.404C26.0958 47.2736 26.0958 38.1432 26.0958 29.0128C26.0958 22.3552 27.6176 16.8389 38.2697 16.8389"
                  stroke="#8062D6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0089 32.0562H26.0958H38.2697"
                  stroke="#8062D6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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

            <a href="tel:+998940007777" className="moderaLinks">
              <img src={Phone1} alt="Phone" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d"
              className="moderaLinks">
              <img src={Facebook1} alt="Phone" className="modera-icon" />
            </a>
            <a
              href="https://instagram.com/moderatowers?igshid=MzRlODBiNWFlZA=="
              className="moderaLinks">
              <img src={Instagram1} alt="Phone" className="modera-icon" />
            </a>
            <a href="https://t.me/moderatowers" className="moderaLinks">
              <img src={Telegram1} alt="Phone" className="modera-icon" />
            </a>
            <a
              href="https://maps.app.goo.gl/81xuBj2eNQrri92d7"
              className="moderaLinks">
              <img src={Location1} alt="Phone" className="modera-icon" />
            </a>
          </div>
          <div className="contactList">
            <a href="tel:+998940007777" className="moderaLink">
              <img src={Phone} alt="Phone" className="modera-icon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d"
              className="moderaLink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="58"
                viewBox="0 0 59 58"
                fill="none">
                <path
                  d="M56.5306 16.8385V41.1862C56.5306 49.5905 49.7174 56.4036 41.3132 56.4036H16.9654C8.5611 56.4036 1.74805 49.5905 1.74805 41.1862V16.8385C1.74805 8.43415 8.5611 1.62109 16.9654 1.62109H41.3132C49.7174 1.62109 56.5306 8.43415 56.5306 16.8385Z"
                  stroke="#8062D6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.0958 56.404C26.0958 47.2736 26.0958 38.1432 26.0958 29.0128C26.0958 22.3552 27.6176 16.8389 38.2697 16.8389"
                  stroke="#8062D6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0089 32.0562H26.0958H38.2697"
                  stroke="#8062D6"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
      <div className="footer">
        <a href="tel:+998901693527">
          {t("hello20")}
        </a>
      </div>
    </>
  );
}

export default Contact;
