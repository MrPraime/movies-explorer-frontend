import React from 'react';
import MoviesCard from './MoviesCard';


function MoviesCardList() {
    return (
    <>
        <div className="movies">
            <MoviesCard/>
        </div>
           <div className="movies__more-button">
              <button className="movies__button">Ещё</button>
            </div>
     </>
    )
}
export default MoviesCardList;
