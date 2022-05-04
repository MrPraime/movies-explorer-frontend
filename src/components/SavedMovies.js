import SeachForm from './SeachForm';
import MoviesCardList from './MoviesCardList';

function SavedMovies() {
    return (
        <main className='main'>
            <SeachForm/>
            <MoviesCardList/>
        </main>
    )
  }
   
 export default SavedMovies;