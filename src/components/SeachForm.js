import React from 'react';
import seach_icon from '../images/seach/seach_icon.svg';

function SeachForm(props) {
    return (
     
            <div className="search-form">
              <div className="search-form__filter">
                <img src={seach_icon} alt="Поиск" className="search-form__icon" />
                <form className="form" onSubmit={props.onSubmit}>
                <input className="search-form__input" placeholder="Фильм" type="text" id="film" onChange={props.onChange} value={props.form} required />
                <div id="film-error" className="input-error">{props.errorInput}</div>
                <div className="search-form__button-form">
                 <button className="seach__button" ></button>
                </div>
                </form>
                <div className="search-form__line"></div>
                <div className="search-form__box">
                <input type="checkbox" className="seach__checkbox" onClick={props.onInputClick}/> 
                  <br></br>
                  <p className="seach__text">Короткометражки</p>
                </div>
              </div>
            </div>
      
      );

    
  }
   
 export default SeachForm;