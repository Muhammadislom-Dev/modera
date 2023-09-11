// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
// const languages = ["en", "ru", "uz"];

// function Language() {
//   const { i18n } = useTranslation();
//   const initialLanguage =
//     typeof window !== "undefined"
//       ? localStorage.getItem("i18nextLng") || "en"
//       : "en";
//   const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       i18n.changeLanguage(selectedLanguage);
//       localStorage.setItem("i18nextLng", selectedLanguage);
//     }
//   }, [selectedLanguage, i18n]);

//   const onChangeLanguage = (value) => {
//     setSelectedLanguage(value);
//   };

//   return (
//     <div className="nav__langs">
//       <p className="nav__current-lang">{selectedLanguage}</p>
//       <span className="nav__current-lang-path" />
//       <ul className="nav__langs-container">
//         {languages?.map((lang) => (
//           <li
//             key={lang}
//             onClick={() => onChangeLanguage(lang)}
//             className="nav__lang">
//             {lang}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Language;
