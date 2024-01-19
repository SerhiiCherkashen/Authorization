import React, { useState } from "react";
import "../App.css";
import {
  setAllFn,
  setHookEmail,
  useHookEmail,
  validateEmail,
  validatePassword,
} from "./hooks";

const Autorisation = (props) => {
  let setState = props.setState;
  const [
    correctEmail,
    correctPassword,
    email,
    password,
    starsPassword,
    // setCorrectEmail,
    // setCorrectPassword,
    // setEmail,
    // setPassword,
    // setStarsPassword,
    changeEmail,
    clickEmail,
    changePassword,
    clickPassword,
    clickButton,
  ] = useHookEmail();

  return (
    <div className="App">
      <h1>Autorisation</h1>
      <div className="wrap">
        <input
          value={email}
          onClick={(e) => clickEmail(e)}
          onChange={(e) => changeEmail(e)}
        />
        <input
          value={starsPassword}
          onClick={(e) => clickPassword(e)}
          onChange={(e) => changePassword(e)}
        />
        <button
          style={{
            backgroundColor:
              correctEmail && correctPassword
                ? "rgb(156, 156, 255)"
                : "rgb(226, 226, 255)",
          }}
          //   onClick={() => clickButton()}> //  old
          onClick={() => clickButton(setState)}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Autorisation;

//   const [correctEmail, setCorrectEmail] = useState("");
//   const [correctPassword, setCorrectPassword] = useState("");
//   const [email, setEmail] = useState("Введiть email");
//   const [password, setPassword] = useState("");
//   const [starsPassword, setStarsPassword] = useState("Введiть password");
//
//
//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };
//   const clickEmail = (e) => {
//     setEmail("");
//   };

//   const changePassword = (e) => {
//     if (e.nativeEvent.data !== null) {
//       let textLength = e.target.value.length;
//       let doublePassword = password;
//       let realText = (doublePassword += e.nativeEvent.data);
//       setPassword(realText);
//       let starsText = "";
//       for (let i = 0; i < textLength; i++) {
//         starsText += "*";
//       }
//       setStarsPassword(starsText);

//       setTimeout(() => {
//         let result = validatePassword(password);
//         if (result) {
//           setCorrectPassword(true);
//         } else {
//           setCorrectPassword(false);
//         }
//       }, 10);
//     } else {
//       let arrPassword = password.split("");
//       arrPassword.splice(-1, 1);
//       let joinPassword = arrPassword.join("");
//       setPassword(joinPassword);

//       let arrStarsPassword = starsPassword.split("");
//       arrStarsPassword.splice(-1, 1);
//       let joinStarsPassword = arrStarsPassword.join("");
//       setStarsPassword(joinStarsPassword);
//     }
//   };
//   const clickPassword = (e) => {
//     setPassword("");
//     setStarsPassword("");
//     let result = validateEmail(email);
//     if (result) {
//       setCorrectEmail(true);
//     } else {
//       setCorrectEmail(false);
//       setEmail("Непрвильний email");
//     }
//   };

//   const clickButton = () => {
//     const minimum8Chars = /^.{8,}$/;
//     if (!minimum8Chars.test(password) || !correctPassword) {
//       setStarsPassword("Непрвильний password");
//     } else {
//       alert(
//         ` Autorisation --- TRUE  Я украл ваши данные и оформлю на вас кредит  Email : ${email}  PAssword : ${password}  `
//       );
//       setState(false);
//     }
//   };
//
//
//
//  -----------------------------------------------------------
//
//
