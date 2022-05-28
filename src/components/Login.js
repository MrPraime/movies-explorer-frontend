import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';

import logo from '../images/header/logo.svg';

 function Login(props) {

  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPassword, setWrongPassword] = useState(false);
    const [emailError, setEmailError] = useState('Поле не может быть пустым!');
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым!');
    const [isValid, setIsValid] = useState(false);

    const activeButtonClassName = `login__save-button login__save-button_auth-page ${isValid ? 'login__save-button_auth-page_active' : ''}`


useEffect(() => {
  if (emailError || passwordError) {
      setIsValid(false)
  } else {
      setIsValid(true)
  }
}, [emailError, passwordError])


function handleSubmit(e) {
e.preventDefault();
props.onSubmit(password, email);
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
            <img src={logo} className="header__logo header__logo_auth-page"></img>

            <h2 className="profile__tittle profile__tittle_auth-page">Рады видеть!</h2>
        </div>

        
        <form className="login__form" onSubmit={handleSubmit}>
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
            Войти
          </button>
        </form>

      <p className="login__text"> 
         Ещё не зарегистрированы?
        <Link to={"/sign-up"} >
            <button className="login__button">Регистрация</button>
        </Link>
      </p>
    </div>
    );
}


export default Login