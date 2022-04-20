import React from 'react';
import SeachForm from './SeachForm';
import MoviesCardList from './MoviesCardList';

export default function Movies() {
    return (
        <main className='main'>
            <SeachForm/>
            <MoviesCardList/>
            
        </main>
    )
}