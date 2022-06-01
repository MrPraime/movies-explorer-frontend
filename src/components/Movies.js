import React from 'react';
import SeachForm from './SeachForm';
import MoviesCardList from './MoviesCardList';
import Footer from "./Footer";
import Header from "./Header";
import Preloader from '../components/Preloader';
import MoreMoviesBtn from './moreMoviesBtn';


function Movies(props) {
    const classError = `movies-cards__error${props.error ? '_active' : ''}`

    return (
        <>
        <Header
        isLoggedIn={props.isLoggedIn}
        />
        <main className='main'>
            <SeachForm
                onSubmit={props.onSubmit}
                onChange={props.onChange}
                error={props.error}
                form={props.form}
                checkbox={props.checkbox}
                onInputClick={props.onInputClick}
                errorInput={props.errorInput}

             />

            <MoviesCardList
                liked={props.liked}
                onLikedClick={props.onLikedClick}
                location={"/movies"}
                loadMore={props.loadMore}
                cards={props.cards}
                error={props.error}
                limit={props.limit}
                onClick={props.onClick}
                load={props.load}
                 />
             <Preloader load={props.load} />
            <p className={classError}>Ничего не найдено</p>

            <MoreMoviesBtn loadMore={props.loadMore} onClick={props.onClick}/>
        </main>
        <Footer /></>
    )
}

export default Movies; 


