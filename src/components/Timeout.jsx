import { Box, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Timeout.css";
import { toast } from "react-toastify";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "52%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "37.5rem",
  bgcolor: "#Fff",
  borderColor: "#Ffff",
  padding: "3.5rem",
  textAlign: "center",
};

function Timeout() {
  const { t } = useTranslation();
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [, setInvalidName] = useState(false);
  const [, setInvalidNumber] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);
  function changeNumber(item) {
    setNumberValue(item);
    setInvalidNumber(false);
  }

  function changeName(item) {
    setNameValue(item);
    setInvalidName(false);
  }
  let bot = {
    TOKEN: "6567609620:AAHWghf_07FQxHs1wI220pI6IM71TgBmEVQ",
    chatID: "-1001849406680",
    message: `
      Assalomu alaykum sizga yangi xabar!%0A
      %0AIsmi 👤: ${nameValue}; 
      %0ATelefon raqami ☎: ${numberValue};`,
  };

  function sendMessage() {
    if (nameValue === "") {
      setInvalidName(true);
    } else if (numberValue === "") {
      setInvalidNumber(true);
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          handleClose();
          toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
        },
        (error) => {}
      );

      setNameValue("");
      setNumberValue("");
    }
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <button onClick={handleClose} className="modal-close">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.8192 1.0579C8.14624 1.60049 2.60191 6.5121 1.29774 13.0363C0.682401 16.1147 1.02279 19.198 2.30092 22.123C3.72674 25.3858 6.57293 28.2337 9.86242 29.6889C14.9189 31.9259 20.6458 31.2709 25.0758 27.9491C26.2432 27.0737 27.6315 25.6041 28.4596 24.3672C31.8427 19.3137 31.8472 12.7304 28.4707 7.68389C27.8694 6.78515 27.4217 6.25056 26.5299 5.36627C25.0322 3.88104 23.494 2.8654 21.5798 2.09776C20.1227 1.51343 18.6525 1.17634 17.0257 1.05349C16.0678 0.981137 15.755 0.981776 14.8192 1.0579ZM11.7172 9.9411C11.9287 10.0365 12.5348 10.5991 14.0033 12.0631L16.0015 14.0554L18.0326 12.0365C20.2802 9.80266 20.3478 9.75236 21.0017 9.82976C21.8731 9.93292 22.4173 10.8242 22.1104 11.6456C22.0154 11.9002 21.6677 12.2805 19.9773 13.979L17.9576 16.0084L19.9773 18.0378C22.2121 20.2833 22.2625 20.351 22.185 21.0044C22.0818 21.8753 21.19 22.4192 20.368 22.1125C20.1133 22.0175 19.7327 21.67 18.0326 19.9802L16.0015 17.9614L14.0033 19.954C12.6734 21.2801 11.9255 21.9797 11.7672 22.0455C11.2518 22.2599 10.5475 22.1271 10.2057 21.7511C9.85948 21.3704 9.75638 20.7331 9.96137 20.2408C10.0272 20.0827 10.7274 19.3351 12.0546 18.0058L14.049 16.0084L12.055 14.011C10.5898 12.5432 10.0267 11.9373 9.93118 11.726C9.68711 11.1857 9.78862 10.6458 10.2143 10.2205C10.6353 9.79978 11.1795 9.6986 11.7172 9.9411Z"
                fill="#0C004C"></path>
            </svg>
          </button>
          <h2 className="modal-title">{t("time1")}</h2>
          <p className="modal-text">{t("time2")}</p>
          <form action="" className="modal-form">
            <input
              value={nameValue}
              onChange={(e) => changeName(e.target.value)}
              type="text"
              placeholder={t("name")}
              className="modal-input"
            />
            <input
              value={numberValue}
              onChange={(e) => changeNumber(e.target.value)}
              type="number"
              placeholder={t("number")}
              className="modal-input"
            />
            <button
              type="submit"
              onClick={() => sendMessage()}
              className="modal-submit">
              <svg
                width="79"
                height="79"
                viewBox="0 0 79 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="39.5"
                  cy="39.5"
                  r="39.5"
                  transform="matrix(-1 0 0 1 79 0)"
                  fill="#291844"></circle>
                <path
                  d="M48 47C48 42.8579 51.4528 39.5 55 39.5M55 39.5C51.4528 39.5 48 36.1421 48 32M55 39.5L24 39.5"
                  stroke="white"></path>
              </svg>
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default Timeout;
