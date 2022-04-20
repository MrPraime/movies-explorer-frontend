import React from 'react';
import NavTab from './NavTab';

function Content() {
   return (
<div className="content">
    <h1 className="content__title">Учебный проект студента факультета Веб-разработки.</h1>
    {/* <div className="content__button-container">

        <p className="content__button">О проекте</p>


        <p className="content__button">Технологии</p>


        <p className="content__button">Студент</p>

    </div> */}
    <NavTab/>
</div>
   );
 }
  
export default Content;

