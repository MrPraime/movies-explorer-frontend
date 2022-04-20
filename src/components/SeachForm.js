import React from 'react';
import seach_icon from '../images/seach/seach_icon.svg';

function SeachForm() {
    return (
    <div className="seach">
        <div className="seach__container">
            <div className='seach__container_type_input'>
                <div className='fas'>
                <img src={seach_icon} alt="Иконка поиска" className="seach__icon"/> 
                <input type="text"  placeholder="Фильм" id="text-input" className="seach__input" minLength="2" maxLength="40"/> 
                </div>
                <button className="seach__button"></button>
            </div>
                <div className='seach__container_type_checkbox'>
                    <div className="seach__vertical-line"></div>
                    <input type="checkbox" className="seach__checkbox"/> 
                    <p className="seach__text">Короткометражки</p>
                </div>
        </div>
    </div>
    );
  }
   
 export default SeachForm;