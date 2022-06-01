import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../images/header/logo.svg";

function Register(props) {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");


  const [wrongName, setWrongName] = useState(false);
    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPassword, setWrongPassword] = useState(false);
    const [nameError, setNameError] = useState('Поле не может быть пустым!');
    const [emailError, setEmailError] = useState('Поле не может быть пустым!');
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым!');
    const [isValid, setIsValid] = useState(false);

    const activeButtonClassName = `login__save-button login__save-button_auth-page ${isValid ? 'login__save-button_auth-page_active' : ''}`

 


    useEffect(() => {
      if (nameError || emailError || passwordError) {
          setIsValid(false)
      } else {
          setIsValid(true)
      }
  }, [nameError, emailError, passwordError])


  

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(name, password, email);
  }



  function handleChangeName(e) {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError('Некорректное имя')
  } else {
      setNameError('')
  }
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError('Поле не может быть пустым!')
  } else {
      setPasswordError('')
  }

  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if ((!e.target.value)) {
      setEmailError('Некорректный email')
  } else {
      setEmailError('')
  }
  }


  const handleBlur = (e) => {
    switch (e.target.name) {
        case "name":
          setWrongName(true)
            break
        case "email":
          setWrongEmail(true)
            break
        case "password":
           setWrongPassword(true)
            break
    }
}


  return (
    <div className="page">
      <div className="header header_type_login">

        <Link to={"/"}>
                   <img src={logo} alt="Логотип" className="header__logo header__logo_auth-page" />
               </Link>

        <div className="profile__tittle profile__tittle_auth-page">
          Добро пожаловать!
        </div>
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="login__input login__input_type_name"
          name="name"
          minLength="2"
          required
          placeholder="Имя"
          value={name || ""}
          onChange={e => handleChangeName(e)}
          onBlur={e => handleBlur(e)}
        />
        {(wrongName && nameError) && <span className="input-error">{nameError}</span>}

        <input
          type="email"
          className="login__input login__input_type_email"
          name="email"
          required=""
          placeholder="Email"
          value={email || ""}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          onChange={e => handleChangeEmail(e)}
          onBlur={e => handleBlur(e)}
        />
         {(wrongEmail && emailError) && <span className="input-error">{emailError}</span>}

        <input
          type="password"
          className="login__input login__input_type_password"
          name="password"
          required=""
          minLength="2"
          maxLength="200"
          placeholder="Пароль"
          value={password || ""}
          onChange={e => handleChangePassword(e)}
          onBlur={e => handleBlur(e)}
        />
      {(wrongPassword && passwordError) && <span className="input-error">{passwordError}</span>}
        <button
          className={activeButtonClassName}
          type="submit"
          onSubmit={handleSubmit}
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>

      <p className="login__text">
        Уже зарегистрированы?
        <Link to={"/sign-in"}>
          <button className="login__button">Войти</button>
        </Link>
      </p>
    </div>
  );
}

export default Register;
