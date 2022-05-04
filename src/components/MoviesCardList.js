import React from 'react';
import MoviesCard from './MoviesCard';


function MoviesCardList() {
    return (
        <div className="movies">
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
            <MoviesCard/>
        </div>
    )
}
export default MoviesCardList;

