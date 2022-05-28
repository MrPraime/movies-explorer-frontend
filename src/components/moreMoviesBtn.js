import React from 'react';


function MoreMoviesBtn(props) {

    return (


            <div className="movies__more-button">
                <button className="movies__button"  onClick={props.onClick}>Ещё</button>
            </div>
    )
}

export default MoreMoviesBtn; 
