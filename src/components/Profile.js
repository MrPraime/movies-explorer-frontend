import React from 'react';


export default function Profile() {
    return (
        <div className="profile">
            <div className="profile__tittle">Привет, Антон!</div>
            <fieldset className="profile__form"> 
                <div className="profile__bar-name">
                    <p className="profile__text">Имя</p>
                    <input type="text" className="profile__input" name="name" placeholder="Антон" id="name-input" required minLength="2" maxLength="40" /> 
                   <span className="name-input-error popup__input-error"></span>  
                </div>
                <div className="profile__bar-name">
                    <p className="profile__text">Email</p>
                    <input type="email" className="profile__input" name="email" placeholder="12345@ya.ru" id="email-input" required minLength="2" maxLength="40" /> 
               <span className="about-input-error popup__input-error"></span>  
            </div>
            </fieldset> 

            <div className="profile__bar">
                <button className="profile__edit">Редактировать</button>
                <button className="profile__signOut">Выйти из Аккаунта</button>
            </div>
    </div>
    )
}