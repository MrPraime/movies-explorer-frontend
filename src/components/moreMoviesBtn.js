import React from 'react';


function MoreMoviesBtn(props) {

    const moreMovies = `movies__more-button${props.loadMore ? '_active' : ''}`

    return (


            <div className={moreMovies}>
                <button className="movies__button"  onClick={props.onClick}>Ещё</button>
            </div>
    )
}

export default MoreMoviesBtn; 
