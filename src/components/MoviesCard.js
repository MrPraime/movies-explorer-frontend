import React from 'react';
import moviesImg from '../images/movie/film1.png';
import { useLocation } from 'react-router-dom';


function MoviesCard() {
    const { pathname } = useLocation();

    return (
        <div className="movie">
            <div className="movie__bar">
                    <div className="movie__title">33 слова о дизайне</div>
                    <div className="movie__time">1ч 47м</div>
                    {pathname == '/movies' ? ( <button type="submit" className="movie__save-button"></button>) : ( 
                        (pathname === '/saved-movies') &&   <button type="submit" className="movie__del-button"></button>
                    )} 
             </div>
            <img src={moviesImg} alt="Превью фильма" className="movie__img"/>
        </div>
     )
}
export default MoviesCard;




