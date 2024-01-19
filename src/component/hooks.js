import React, { useState } from "react";

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};
export const validatePassword = (password) => {
  const minimum8Chars = /^.{8,}$/;
  const withoutSpecialChars = /^[^-().*/!@#$%^&*()_ /]*$/;
  const containsLetters = /^.*[a-zA-Z]+.*$/;
  let result;
  if (
    minimum8Chars.test(password) &&
    withoutSpecialChars.test(password) &&
    containsLetters.test(password)
  ) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

export const useHookEmail = () => {
  const [correctEmail, setCorrectEmail] = useState("");
  const [correctPassword, setCorrectPassword] = useState("");
  const [email, setEmail] = useState("Введiть email");
  const [password, setPassword] = useState("");
  const [starsPassword, setStarsPassword] = useState("Введiть password");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const clickEmail = (e) => {
    setEmail("");
  };

  const changePassword = (e) => {
    if (e.nativeEvent.data !== null) {
      let textLength = e.target.value.length;
      let doublePassword = password;
      let realText = (doublePassword += e.nativeEvent.data);
      setPassword(realText);
      let starsText = "";
      for (let i = 0; i < textLength; i++) {
        starsText += "*";
      }
      setStarsPassword(starsText);

      setTimeout(() => {
        let result = validatePassword(password);
        if (result) {
          setCorrectPassword(true);
        } else {
          setCorrectPassword(false);
        }
      }, 10);
    } else {
      let arrPassword = password.split("");
      arrPassword.splice(-1, 1);
      let joinPassword = arrPassword.join("");
      setPassword(joinPassword);

      let arrStarsPassword = starsPassword.split("");
      arrStarsPassword.splice(-1, 1);
      let joinStarsPassword = arrStarsPassword.join("");
      setStarsPassword(joinStarsPassword);
    }
  };
  const clickPassword = (e) => {
    setPassword("");
    setStarsPassword("");
    let result = validateEmail(email);
    if (result) {
      setCorrectEmail(true);
    } else {
      setCorrectEmail(false);
      setEmail("Непрвильний email");
    }
  };

  const clickButton = (setState) => {
    const minimum8Chars = /^.{8,}$/;
    if (!minimum8Chars.test(password) || !correctPassword) {
      setStarsPassword("Непрвильний password");
    } else {
      alert(
        ` Autorisation --- TRUE  Я украл ваши данные и оформлю на вас кредит  Email : ${email}  PAssword : ${password}  `
      );
      setState(false);
    }
  };

  return [
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
  ];
};
