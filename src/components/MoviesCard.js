import React, { useState } from "react";
import moviesImg from '../images/movie/film1.png';
import { useLocation } from 'react-router-dom';


function MoviesCard() {
    const { pathname } = useLocation();
    const [like, putLike] = useState(false);

    return (
        <div className="movie">
            <div className="movie__bar">
                    <h3 className="movie__title">33 слова о дизайне</h3>
                    <p className="movie__time">1ч 47м</p>
                        {pathname == '/movies' ? (     <button onClick={() => putLike(!like)} className={`movie__save-button ${like ? `movie__save-button_type_saved` : ""}`}></button>) : ( 
                        (pathname === '/saved-movies') &&   <button type="submit" className="movie__del-button"></button>
                    )} 
             </div>
            <img src={moviesImg} alt="Превью фильма" className="movie__img"/>
        </div>
     )
}
export default MoviesCard;




