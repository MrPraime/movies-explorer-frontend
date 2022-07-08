import React from 'react';
import MoviesCard from './MoviesCard';


const MoviesCardList = (props) => { 

    return (   
        <div className="movies" >  
        {props.cards.slice(0, props.limit).map((movie
        , id
        ) => {
            return (
                
                <MoviesCard
                                key={id}                    
                                movieName={movie.nameRU}
                                movieLink={movie.image.url}
                                movieImg={movie.image}
                                movieTime={movie.duration}
                                movie={movie}
                                movieVideo={movie.trailerLink}
                                onLikedClick={props.onLikedClick}
                                liked={props.liked}
                                location={props.location}
                                onDeleteClick={props.onDeleteClick}
                />
            )
        })}
    </div>
    )



}
export default MoviesCardList;

