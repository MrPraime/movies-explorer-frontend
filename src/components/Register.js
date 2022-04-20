import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../images/header/logo.svg';

export default function Register() {
    return (
      <div className="page">
      <div className="header header_type_login">
          <img src={logo} className="header__logo header__logo_auth-page"></img>

          <div className="profile__tittle profile__tittle_auth-page">Добро пожаловать!</div>
      </div>
      <form className="login__form">
      <input
          type="text"
          className="login__input login__input_type_name"
          name="name"
          required=""
          placeholder="Имя"
          
        />  
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
          Зарегистрироваться
        </button>
      </form>

    <div className="login__text">Уже зарегистрированы?
    <Link to={"sign-in"} >
        <button className="login__button">Войти</button>
    </Link>
    </div>
    </div>
    )
}