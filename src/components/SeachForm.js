import React from 'react';
import seach_icon from '../images/seach/seach_icon.svg';

function SeachForm() {
    return (
     
            <div className="search-form">
              <div className="search-form__filter">
                <img src={seach_icon} alt="Поиск" className="search-form__icon" />
                <input className="search-form__input" placeholder="Фильм" type="text" required />
                <div className="search-form__button-form">
                 <button className="seach__button"></button>
                </div>
                <div className="search-form__line"></div>
                <div className="search-form__box">
                <input type="checkbox" className="seach__checkbox"/> 
                  <br></br>
                  <p className="seach__text">Короткометражки</p>
                </div>
              </div>
            </div>
      
      );

    
  }
   
 export default SeachForm;