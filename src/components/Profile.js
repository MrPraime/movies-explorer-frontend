import React, {useState, useContext} from 'react';
import Header from "./Header";
import CurrentUserContext from '../contexts/CurrentUserContext';


export default function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name); 
  const [email, setEmail] = React.useState(currentUser.email); 
  const [button, setButton] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
 
   const activeButtonClassName = `profile__edit ${button ? 'profile__edit_active' : ''}`


   function handleName(e) { 
    setName(e.target.value);
    if (e.target.value === currentUser.name) {
      setButton(false);
      setDisabled(true);
    } else {
      setDisabled(false);
      setButton(true);
    } 
  } 

  function handleEmail(e) { 
    setEmail(e.target.value); 
    if (e.target.value === currentUser.email) {
      setButton(false);
      setDisabled(true);
    } else {
      setDisabled(false);
      setButton(true);
    } 
  } 

  function handleSubmit(e) { 
    e.preventDefault();
    props.onUpdateUser({ 
      name: name, 
      email: email, 
    }); 
    setDisabled(true);
    setButton(false);
  } 

  React.useEffect(() => { 
    setName(currentUser.name); 
    setEmail(currentUser.email);
  }, [currentUser]); 


function signOut() {
    props.signOut();
  }

    return (
        <><Header   isLoggedIn={props.loggedIn}/>
        <div className="profile">
            <div className="profile__tittle">Привет, {currentUser.name}!</div>
            <form className="profile__form" >
                <div className="profile__bar-name">
                    <p className="profile__text">Имя</p>
                    <input type="text" className="profile__input" name="name" placeholder="Антон" id="name-input" required minLength="2" maxLength="40"   value={`${name}`} onChange={handleName} />
                    <span className="name-input-error popup__input-error"></span>
                </div>
                <div className="profile__bar-name">
                    <p className="profile__text">Email</p>
                    <input type="email" className="profile__input" name="email" placeholder="12345@ya.ru" id="email-input" required minLength="2" maxLength="40"  value={`${email}`} onChange={handleEmail}/>
                    <span className="about-input-error popup__input-error"></span>
                </div>
                <button  className={activeButtonClassName} disabled={disabled} onClick={handleSubmit}>Редактировать</button>
            </form>

            <div className="profile__bar">
                <button className="profile__signOut" onClick={signOut}>Выйти из Аккаунта</button>
            </div>
        </div></>
    )
}