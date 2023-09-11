import React, { useState } from "react";
import styles from "./Layout.module.css";
import { toast } from "react-toastify";

function Form() {
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
    <div className={styles.form}>
      <div className="container">
        <form action="">
          <input
            value={nameValue}
            onChange={(e) => changeName(e.target.value)}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="formInput"
          />
          <input
            value={numberValue}
            onChange={(e) => changeNumber(e.target.value)}
            type="number"
            name="tel"
            placeholder="Your number"
            required
            className="formInput"
          />
        </form>
        <button type="submit" onClick={() => sendMessage()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="116"
            height="116"
            viewBox="0 0 116 116"
            fill="none">
            <rect
              x="57.9871"
              width="82.0061"
              height="82.0061"
              transform="rotate(45 57.9871 0)"
              fill="#8062D6"
            />
            <path
              d="M64.7281 78.5513C64.1631 78.5513 63.5981 78.3432 63.1521 77.8971C62.2898 77.0348 62.2898 75.6075 63.1521 74.7452L79.6254 58.2719L63.1521 41.7987C62.2898 40.9364 62.2898 39.5091 63.1521 38.6467C64.0144 37.7844 65.4417 37.7844 66.304 38.6467L84.3533 56.6959C85.2156 57.5583 85.2156 58.9856 84.3533 59.8479L66.304 77.8971C65.858 78.3432 65.293 78.5513 64.7281 78.5513Z"
              fill="white"
            />
            <path
              d="M82.2745 60.5018H32.2301C31.011 60.5018 30 59.4908 30 58.2716C30 57.0525 31.011 56.0415 32.2301 56.0415H82.2745C83.4936 56.0415 84.5046 57.0525 84.5046 58.2716C84.5046 59.4908 83.4936 60.5018 82.2745 60.5018Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Form;
