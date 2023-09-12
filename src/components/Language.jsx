import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Language() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { i18n } = useTranslation();
  const initialLanguage =
    typeof window !== "undefined"
      ? localStorage.getItem("i18nextLng") || "en"
      : "en";
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  useEffect(() => {
    if (typeof window !== "undefined") {
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem("i18nextLng", selectedLanguage);
    }
  }, [selectedLanguage, i18n]);

  const onChangeLanguage = (value) => {
    setSelectedLanguage(value);
  };

  return (
    <div className="custom-dropdown" onClick={toggleMenu}>
      <button className="custom-dropdown-toggle">{selectedLanguage}</button>
      {isMenuOpen && (
        <div className="custom-dropdown-menu">
          <div
            className="custom-dropdown-item"
            onClick={() => onChangeLanguage("UZ")}>
            UZ
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => onChangeLanguage("RU")}>
            RU
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => onChangeLanguage("ENG")}>
            ENG
          </div>
        </div>
      )}
    </div>
  );
}

export default Language;
