import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <a href="tel:+998940007777" className="footer-link">
          +998 94 000 77 77
        </a>
        <p className="footer-text">
          ПРЕЗЕНТАЦИОННЫЙ ОФИС: 5-Й ПРОЕЗД НИЁЗБЕК ЙУЛИ, 29А (ОРИЕНТИР: АЛАЙСКИЙ
          РЫНОК)
        </p>
        <div className="footer-list">
          <a
            href="https://www.facebook.com/profile.php?id=61550525660613&mibextid=LQQJ4d"
            className="footer-links">
            Facebook
          </a>
          <a
            href="https://instagram.com/moderatowers?igshid=MzRlODBiNWFlZA=="
            className="footer-links">
            Instagram
          </a>
          <a href="https://t.me/moderatowers" className="footer-links">
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
