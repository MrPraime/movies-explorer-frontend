import React from 'react';
import { Link} from 'react-router-dom';

import logo from '../images/header/logo.svg';

export default function Login() {
    return (
      <div className="page">
      <div className="header header_type_login">
          <img src={logo} className="header__logo header__logo_auth-page"></img>

          <h1 className="profile__tittle profile__tittle_auth-page">Рады видеть!</h1>
      </div>
      <form className="login__form">
      <span className="email-input-error popup__input-error"></span>
        <input
          type="email"
          className="login__input login__input_type_email"
          name="email"
          required=""
          placeholder="Email"
        />
        <span className="email-input-error popup__input-error"></span>
        <input
          type="password"
          className="login__input login__input_type_password"
          name="password"
          required=""
          minLength="2"
          maxLength="200"
          placeholder="Пароль"
        
        /><span className="password-input-error popup__input-error"></span
        ><button
          className="login__save-button login__save-button_auth-page"
          type="submit"
        >
          Войти
        </button>
      </form>

    <p className="login__text"> 
    Ещё не зарегистрированы?
      <Link to={"sign-up"} >
          <button className="login__button">Регистрация</button>
      </Link>
    </p>
    </div>
    )
}