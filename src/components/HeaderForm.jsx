import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import "./style.css";

function HeaderForm() {
  const { t } = useTranslation();
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [, setInvalidName] = useState(false);
  const [, setInvalidNumber] = useState(false);

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
          console.log("send message");
          toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
        },
        (error) => {
          console.log(error);
        }
      );

      setNameValue("");
      setNumberValue("");
    }
  }
  return (
    <div className="headerForm">
      <h2 className="headerFormName">
        <TypeAnimation
          sequence={[t("form"), 2000]}
          wrapper="span"
          speed={220}
          repeat={2}
        />
      </h2>
      ;
      <form action="">
        <input
          value={nameValue}
          onChange={(e) => changeName(e.target.value)}
          type="text"
          name="name"
          placeholder={t("input")}
          required
          className="formInput"
        />
        <input
          value={numberValue}
          onChange={(e) => changeNumber(e.target.value)}
          type="number"
          name="tel"
          placeholder={t("input1")}
          required
          className="formInput"
        />
      </form>
      <button type="submit" onClick={() => sendMessage()}>
        {t("send")}
      </button>
    </div>
  );
}

export default HeaderForm;
