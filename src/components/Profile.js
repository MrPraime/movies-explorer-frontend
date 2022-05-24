import React, {useState, useContext} from 'react';
import Header from "./Header";
import CurrentUserContext from '../contexts/CurrentUserContext';


export default function Profile(props) {

    const currentUser = useContext(CurrentUserContext);


    const [name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [button, setButton] = useState(false);
    const [disabled, setDisabled] = useState(true);
 
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


  React.useEffect(() => {
     {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);


  const handleSubmit = (e) => {
    e.preventDefault();

    props.onUpdateUser({
        name, 
        email: email
    });
};  


function signOut() {
    props.signOut();
  }

    return (
        <><Header />
        <div className="profile">
            <div className="profile__tittle">Привет, {currentUser.name}!</div>
            <form className="profile__form"  onSubmit={handleSubmit}>
                <div className="profile__bar-name">
                    <p className="profile__text">Имя</p>
                    <input type="text" className="profile__input" name="name" placeholder="Антон" id="name-input" required minLength="2" maxLength="40"  value={name ? name : ""} onChange={handleName} />
                    <span className="name-input-error popup__input-error"></span>
                </div>
                <div className="profile__bar-name">
                    <p className="profile__text">Email</p>
                    <input type="email" className="profile__input" name="email" placeholder="12345@ya.ru" id="email-input" required minLength="2" maxLength="40"  value={email ? email : ""} onChange={handleEmail}/>
                    <span className="about-input-error popup__input-error"></span>
                </div>
                <button  className={activeButtonClassName} disabled={disabled} onSubmit={handleSubmit}>Редактировать</button>
            </form>

            <div className="profile__bar">
                <button className="profile__signOut" onClick={signOut}>Выйти из Аккаунта</button>
            </div>
        </div></>
    )
}