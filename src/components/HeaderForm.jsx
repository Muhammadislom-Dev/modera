import React from "react";
import styles from "./Gallery.module.css";
import { useState } from "react";
import { toast } from "react-toastify";

function HeaderForm() {
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
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className={styles.headerForm}>
      <h2 className={styles.headerFormName}>CONSULTATION WITH A SPECIALIST </h2>
      <form action="">
        <input
          value={nameValue}
          onChange={(e) => changeName(e.target.value)}
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className={styles.formInput}
        />
        <input
          value={numberValue}
          onChange={(e) => changeNumber(e.target.value)}
          type="number"
          name="tel"
          placeholder="Your number"
          required
          className={styles.formInput}
        />
      </form>
      <button type="submit" onClick={() => sendMessage()}>
        SEND
      </button>
    </div>
  );
}

export default HeaderForm;
