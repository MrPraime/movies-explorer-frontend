import React, { useState } from "react";


const MoviesCard = (props) => {


    function handleLikeClick() {
        props.onLikedClick(props.movie.id);
    }
    function handleDeleteClick() {
        props.onDeleteClick(props.movie.id);
    }

    const liked = props.movie.liked;
    return (
        <div className="movie" >


                {(props.location === "/movies") && (
                    <>
                      <div className="movie__bar">
                            <h3 className="movie__title">{props.movieName}</h3>
                            <p className="movie__time">{props.movieTime} </p>
                            <button  onClick={handleLikeClick} className={`movie__save-button ${liked ? `movie__save-button_type_saved` : ""}`}></button>
                        </div>
                        <a href={props.movieVideo} target="_blank"><img  src={`https://api.nomoreparties.co${props.movieLink}`} alt={props.movieName} className="movie__img"/></a>

                    </>)}


                    {(props.location === "/saved-movies") && (
                        <>
                                              <div className="movie__bar">
                                              <h3 className="movie__title">{props.movieName}</h3>
                                              <p className="movie__time">{props.movieTime}</p>
                                              <button  onClick={handleDeleteClick} className="movie__del-button"></button>
                                              
                  
                                          </div>
                                          <a href={props.movieVideo} target="_blank"><img  src={props.movieImg} alt={props.movieName} className="movie__img"/></a>
                                          </>
                )}


        </div>
     )
}
export default MoviesCard;



