import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "./style.css";
import { useEffect } from "react";
import "./animation.css";

function HeaderForm() {
  const { t } = useTranslation();
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [, setInvalidName] = useState(false);
  const [, setInvalidNumber] = useState(false);

  const [isVcdActive, setIsVcdActive] = useState(false);
  useEffect(() => {
    const fathEl = document.querySelector(".headerFormName");
    const childEls = fathEl?.querySelectorAll(".textspan");

    const handleScroll = () => {
      let scrolling = window.scrollY;
      if (scrolling >= 140 || scrolling >= 500) {
        if (!isVcdActive) {
          setIsVcdActive(true);
          for (const el of childEls) {
            el.classList.add("vcd3");
          }
        }
      } else {
        if (isVcdActive) {
          setIsVcdActive(false);
          for (const el of childEls) {
            el.classList.remove("vcd3");
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        {t("form")
          .split("")
          .map((char, index) => (
            <span className="textspan" key={index}>
              {char}
            </span>
          ))}{" "}
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
