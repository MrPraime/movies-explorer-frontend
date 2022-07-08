import SeachForm from './SeachForm';
import MoviesCardList from './MoviesCardList';
import Footer from "./Footer";
import Header from "./Header";
import Preloader from '../components/Preloader'


function SavedMovies(props) {
    const classError = `movies-cards__error${props.error ? '_active' : ''}`
    return (
        <><Header 
        isLoggedIn={props.loggedIn}
        />
        <main className='main'>
            <SeachForm
                form={props.form}
                checkbox={props.checkbox}
                onChange={props.onChange}
                onInputClick={props.onInputClick}
                onSubmit={props.onSubmit}
                errorInput={props.errorInput}
            />
            <MoviesCardList
                    location={"/saved-movies"}
                    cards={props.cards}
                    error={props.error}
                    limit={props.limit}
                    onDeleteClick={props.onDeleteClick}
                    load={props.load}
            />
             <Preloader load={props.load} />
            <p className={classError}>Ничего не найдено</p>

        </main>
        <Footer />
        </>
    )
  }
   
 export default SavedMovies;

