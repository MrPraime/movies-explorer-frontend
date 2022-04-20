import React from 'react';

function About() {
   return (
<div className="about" id='about-project'>
    <h2 className="page__title">О проекте</h2>
    <div className="about__info">
        <div className="about__container">
            <h2 className="about__subtitle">Дипломный проект включал 5 этапов</h2>
            <h3 className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</h3>
        </div>
        <div className="about__container">
            <h2 className="about__subtitle">На выполнение диплома ушло 5 недель</h2>
            <h3 className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</h3>
        </div>
    </div>
                    <div className="about__diagram">

                <div className="about__diagram-container">
                        <div className="about__diagram-containerr_type_short">
                                <p className='about__diagram-time about__diagram-time_short'>1 неделя</p>
                            </div>
                            <div className="about__diagram-work">Back-end</div>
                        </div>

                    <div className="about__diagram-container">
                        <div className="about__diagram-containerr_type_long">
                            <p className='about__diagram-time about__diagram-time_long'>4 недели</p>
                            </div>
                    <div className="about__diagram-work">Front-end</div>
                </div>
</div>
</div>
   );
 }
  
export default About;


