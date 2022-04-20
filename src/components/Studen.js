import React from 'react';
import logo from '../images/student/my photo.jpg';


function Student() {
   return (
    <div className="studen" id='student'>
    <h1 className="page__title">Студент</h1>
    <div className="student__container">
        <div className="student__info">
            <div className="student__name">Антон</div>
            <div className="student__job">Джуниор Фронтенд, 28 лет</div>
            <div className="student__about">Заполню потом</div>
        </div>
        <img src={logo} alt="Моё фото" className="student__photo"/> 
    </div>
    <div className="student__links">
        <a className="student__link" href="">Facebook</a>
        <a className="student__link" href="">Github</a>
    </div>
    <ul className="student__portfolio">
        <li className="student__title">Портфолио</li>
        <li className="student__item"><a href='https://github.com/MrPraime' target="_blank" className="student__link_type_portfolio">Статичный сайт</a></li>
        <li className="student__item"><a href='https://github.com/MrPraime' target="_blank" className="student__link_type_portfolio">Адаптивный сайт</a></li>
        <li className="student__item"><a href='https://github.com/MrPraime/react-mesto-api-full' target="_blank" className="student__link_type_portfolio" >Одностраничное приложение</a></li>
    </ul>

</div>
   );
 }
  
export default Student;