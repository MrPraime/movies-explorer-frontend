import React from 'react';

function Tech() {
   return (
    <div className="tech" id='tech'>
        <h2 className="page__title about__title_tech ">Технологии</h2>
        <div className="tech__container">
            <h3 className="tech__title">7 технологий</h3>
            <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
            <ul className="tech__list">
                <li className="tech__list-item ">
                    <p className="tech__text">HTML</p>
                </li>
                <li className="tech__list-item ">
                    <p className="tech__text">CSS</p>
                </li>
                <li className="tech__list-item ">
                    <p className="tech__text">JS</p>
                </li>
                <li className="tech__list-item ">
                    <p className="tech__text">React</p>
                </li>
                <li className="tech__list-item ">
                    <p className="tech__text">Git</p>
                </li>
                <li className="tech__list-item ">
                    <p className="tech__text">Express.js</p>
                </li>
                <li className="tech__list-item ">
                    <p className="tech__text">mongoDB</p>
                </li>
            </ul>
    </div>
   );
 }
  
export default Tech;