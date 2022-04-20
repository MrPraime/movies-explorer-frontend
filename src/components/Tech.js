import React from 'react';

function Tech() {
   return (
    <div className="tech" id='tech'>
        <h2 className="page__title about__title_tech ">Технологии</h2>
        <div className="tech__container">
            <h2 className="tech__title">7 технологий</h2>
            <h3 className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h3>
        </div>
        <div className="tech__list">
            <div className="tech__list-item ">
                <h4 className="tech__text">HTML</h4>
            </div>
            <div className="tech__list-item ">
                <h4 className="tech__text">CSS</h4>
            </div>
            <div className="tech__list-item ">
                <h4 className="tech__text">JS</h4>
            </div>
            <div className="tech__list-item ">
                <h4 className="tech__text">React</h4>
            </div>
            <div className="tech__list-item ">
                <h4 className="tech__text">Git</h4>
            </div>
            <div className="tech__list-item ">
                <h4 className="tech__text">Express.js</h4>
            </div>
            <div className="tech__list-item ">
                <h4 className="tech__text">mongoDB</h4>
            </div>
        </div>
    </div>
   );
 }
  
export default Tech;