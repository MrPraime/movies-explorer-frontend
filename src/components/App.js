import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import Main from "./Main";
import Movies from "./Movies";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import SavedMovies from "./SavedMovies";
import NotFound from "./NotFound";

import apiMovies from "../utils/MoviesApi";
import mainApi from "../utils/MainApi";;

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [load, setLoad] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const size = useWindowSize();
  const [limit, setLimit] = useState();
  const [loadMore, setLoadMore] = useState(true);
  const [form, setForm] = React.useState("");
  const [checked, setСhecked] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorInput, setInputError] = React.useState("");
  const [shortMovie, setShortMovie] = React.useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [checkedSaved, setСheckedSaved] = React.useState(false);
  const [formSaved, setFormSaved] = React.useState('');
  const [errorInputSaved, setInputErrorSaved] = React.useState('');
  const navigate = useNavigate();
  const [shortSavedMovie, setShortSavedMovie] = React.useState([]);
  const PAGE_WITHOUT_AUTH = ["/sign-in", "/sign-up"]; 
  const location = useLocation();

  const jwt = localStorage.getItem("jwt");
  
  document.body.onload = function () {
    setTimeout(function () {
      setLoad(true);
    }, 1000);
  };

  /*отслеживаем размер экрана */
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState(undefined);
    useEffect(() => {
      function handleResize() {
        setWindowSize(window.innerWidth);
        if (window.innerWidth > 880) {
          setLimit(12)
        } else {
          if (window.innerWidth > 600 && window.innerWidth <= 880) {
            setLimit(8)
          } else setLimit(5)
        }
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

/*определяем сколько карточек загрузить в зависимости от размера экрана*/

  function addMoreMovies() {
      if (size > 880) {
        setLimit((prevLimit) => prevLimit + 3);
        if (limit + 3 < cards.length) {
          setLoadMore(false);
      } else {
        setLoadMore(true);
      }
      } else {
        setLimit((prevLimit) => prevLimit + 2);
        if (limit + 2 < cards.length) {
          setLoadMore(false);
      } else {
        setLoadMore(true);
      }
      }
  }

/* показывать ошибку при пустом инпуте поиска */
 
  const handleChange = (event) => {
    setForm(event.target.value);
    if (!event.target.value) {
      setInputError('Нужно ввести ключевое слово')
    } else {
      setInputError('')
    }
  };

/** получение карточек из beatfilm */

function getAllMovies() {
  apiMovies.getMovies()
    .then((cards) => {
      localStorage.setItem('movie', JSON.stringify(cards.map((cards) => {
        return {
          country: cards.country,
          description: cards.description,
          director: cards.director,
          duration: cards.duration,
          id: cards.id,
          image: cards.image,
          nameEN: cards.nameEN,
          nameRU: cards.nameRU,
          trailerLink: cards.trailerLink,
          year: cards.year,
          liked: false
        }
      })
      ))
    })  
    .catch((err) => {
      console.log(err);
    })
}


/** результат поиска в поисковике фильмов */

function handleSubmit(event) {
    event.preventDefault();
    const movies = JSON.parse(localStorage.getItem('movie'))
    const moviesFilter = movies.filter(card => card.nameRU.toUpperCase().indexOf(form.toUpperCase()) !== -1)
    setCards(moviesFilter)
    localStorage.setItem('liked', JSON.stringify(moviesFilter));
    localStorage.setItem('status', JSON.stringify({
      'movies': moviesFilter,
      'checked': checked,
      'form': form
    }))
    if (moviesFilter.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
    if (moviesFilter.length <= limit) {
      setLoadMore(true);
    } else {
      setLoadMore(false);
    }
  };


React.useEffect(() => {
  const data = JSON.parse(localStorage.getItem('status'));
  
    if (data === null) {
      setCards([])
      setСhecked(false)
      setForm('')
    } else {
      setCards(data.movies)
      setСhecked(data.checked)
      setForm(data.form)
      const likedCard = JSON.parse(localStorage.getItem('liked'));
      if (likedCard === null) {
        setCards(data.movies);
      } else setCards(likedCard);
  }
}, []);

React.useEffect(() => {
  const moviesChecked = cards.filter(card => card.duration <= 40)
  setShortMovie(moviesChecked)
}, [cards, setСhecked]);

function handleСheckedClick() {
  setСhecked((prev) => !prev)
  localStorage.setItem('status', JSON.stringify({
    'movies': cards,
    'checked': !checked,
    'form': form
  }))
}

/** ошибка пустой поисковой строки  */
const handleChangeSaved = (event) => {
  setFormSaved(event.target.value);
  if (!event.target.value) {
    setInputErrorSaved('Нужно ввести ключевое слово')
  } else {
    setInputError('')
  };
}


/** лайк и добавление фильма на странице /movies + удаление лайка*/

function handleMovie(id) {
  const movies = JSON.parse(localStorage.getItem('movie'))
  
  const cardLiked = cards.find((card) => card.id === id)
  if (cardLiked.liked === true) {
    setCards(
      cards.map((card) =>card.id === id ? { ...card, liked: false } : card,)
    )
    localStorage.setItem('liked', JSON.stringify(cards.map((card) => card.id === id ? { ...card, liked: false } : card,)));

    localStorage.setItem('movie', JSON.stringify(movies.map((card) => card.id === id ? { ...card, liked: false } : card,)));

    localStorage.setItem('saved', JSON.stringify(movies.map((card) => card.id === id ? { ...card, liked: false } : card,)));
    function savedCard(card) {
      return card._id ;
    }
    const savedMoviesFilter = savedCards.find(savedCard)

    mainApi.removeMovie(savedMoviesFilter._id, jwt)
    .then(() => {
      setSavedCards((state) => state.filter((c) => c._id !== savedMoviesFilter._id));
      localStorage.setItem('saved', JSON.stringify((state) => state.filter((c) => c._id !== savedMoviesFilter._id)));
    })
    .catch((err) => {console.error(err);});
  } else {
    setCards(      
      cards.map((card) =>card.id === id ? { ...card, liked: true } : card));

    localStorage.setItem('liked', JSON.stringify(cards.map((card) => card.id === id ? { ...card, liked: true } : card,)));
    localStorage.setItem('movie', JSON.stringify(movies.map((card) =>card.id === id ? { ...card, liked: true } : card,)));
    mainApi.saveMovie(cardLiked, jwt)
      .then((newCard) => {
        setSavedCards([newCard, ...savedCards]);
        localStorage.setItem('saved', JSON.stringify([newCard, ...savedCards]));
      })
      .catch((err) => {console.error(err);});
  }
}


/** Удаление фильма из сохраненных фильмов  */
function handleDelMovie(id) {
  const movies = JSON.parse(localStorage.getItem('movie'))
  setCards(
    cards.map((card) =>
      card.id === id ? { ...card, liked: false } : card
    )
  )
  localStorage.setItem('liked', JSON.stringify(cards.map((card) => card.id === id ? { ...card, liked: false } : card,)));
  localStorage.setItem('movie', JSON.stringify(movies.map((card) => card.id === id ? { ...card, liked: false } : card,)));

  function savedCard(card) {
    return card._id ;
  }
  const savedMoviesFilter = savedCards.find(savedCard)

  mainApi.removeMovie(savedMoviesFilter._id, jwt)
    .then(() => {
      setSavedCards((state) => state.filter((c) => c._id !== savedMoviesFilter._id));
      localStorage.setItem('saved', JSON.stringify((state) => state.filter((c) => c._id !== savedMoviesFilter._id)));
    })
    .catch((err) => {
      console.error(err);

    });
}



function handleSearchLikedCards([user, cards]) {
  const movies = JSON.parse(localStorage.getItem('movie'))
  localStorage.setItem('movie', JSON.stringify(movies.map((movie) => {
    if (cards.filter(card => card.owner === user._id).find((saved) => movie.id === saved.id)) {
      return { ...movie, liked: true }
    } else return movie
  }
  )));
}



/** результат поиска сохраненных фильмов */
function handleSubmitSavedMovies(event) {
  event.preventDefault();
  const savedMovies = JSON.parse(localStorage.getItem('saved'));
  const moviesFilter = savedMovies.filter(card => card.nameRU.toUpperCase().indexOf(formSaved.toUpperCase()) !== -1);
  setSavedCards(moviesFilter);
  if (moviesFilter.length === 0) {
    setError(true);
  } else {
    setError(false);
  }
};

React.useEffect(() => {
  setShortSavedMovie(savedCards.filter(card => card.duration <= 40))
}, [savedCards, setСheckedSaved]);

function handleСheckedClickSaved() {
  setСheckedSaved((prev) => !prev)
}

/*ответ от всех промисов */
React.useEffect(() => {
  if (loggedIn) {
    Promise.all([
      mainApi.getUserInfo(jwt),
      mainApi.getSavedMovies(jwt)
    ])
      .then(([user, cards]) => {
        setCurrentUser(user);
        setSavedCards(cards.filter(card => card.owner === user._id)); 
        localStorage.setItem('saved', JSON.stringify(cards.filter(card => card.owner === user._id)));
        handleSearchLikedCards([user, cards]);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}, [loggedIn])



/** Проверка токена */
  // function checkToken() {
  //   const jwt = localStorage.getItem("jwt");
  //      if (jwt) {
  //       mainApi
  //          .checkToken(jwt)
  //          .then((data) => {
  //            setLoggedIn(true);
     
  //            navigate("/movies");
  //          })
  //          .catch((err) => {
  //            console.error(err);
  //          });
  //      }
  //    }




  function checkToken(path) {
    
    if (!loggedIn && localStorage.getItem('jwt') && PAGE_WITHOUT_AUTH.includes(path)) {
      navigate('/');
    } else  {
        const jwt = localStorage.getItem("jwt");
        mainApi
           .checkToken(jwt)
           .then((data) => {
             setLoggedIn(true);
     
             navigate(path);
           })
           .catch((err) => {
             console.error(err);
           });
       }
     }
   
     React.useEffect(() => {
       checkToken(location.pathname);
     }, []);
   

  
    //  /** регистрация пользователя */
     function handleUserRegister(name, password, email) {
      mainApi
         .register(name, password, email)
         .then(() => {

          handleUserAuthorization(password, email)
         })
         .catch((err) => {
           console.error(err);

         });
     }
     
   
     /** авторизация пользователя */
     function handleUserAuthorization(password, email) {
      mainApi
         .authorization(password, email)
         .then((data) => {
           localStorage.setItem("jwt", data.token);
           setLoggedIn(true);
           navigate("/movies");
           getAllMovies();
           return data.token
         })
         .catch((err) => {
           console.error(err);
         });
     }


     /*Обновление информации о пользователе */

     const handleUpdateUser = ({ name, email }) => {
      
      mainApi
        .patchUserInfo(name, email, jwt)
        .then((newUser) => {
          setCurrentUser(newUser);
        })
        .catch((err) => {
          console.error(err);
        })
    };


   /*ЛогАут */
   function handleSignOutClick() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('status');
    localStorage.removeItem('saved');
    localStorage.removeItem('liked');
    localStorage.removeItem('movie');
    setCards([]);
    setForm('');
    setСhecked(false);
    setSavedCards([]);
    setFormSaved('');
    setСheckedSaved(false);
    navigate('/')
    
    setLoggedIn(false);
  }





  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies
                  load={load}
                  loadMore={loadMore}
                  error={error}
                  form={form}
                  limit={limit}
                  cards={checked ? shortMovie : cards}
                  checkbox={checked}
                  errorInput={errorInput}
                  onLikedClick={handleMovie}
                  handleDeleteMovie={handleDelMovie}
                  
                  onClick={addMoreMovies}
                  onInputClick={handleСheckedClick}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  cards={checkedSaved ? shortSavedMovie : savedCards}
                  limit={limit}
                  error={error}
                  form={formSaved}
                  checkbox={checkedSaved}
                  onChange={handleChangeSaved}
                  onInputClick={handleСheckedClickSaved}
                  onSubmit={handleSubmitSavedMovies}
                  load={load}
                  errorInput={errorInputSaved}
                  onDeleteClick={handleDelMovie}
                  loadMore={loadMore}

                />
              </ProtectedRoute>
            }
          />

          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                onUpdateUser={handleUpdateUser}
                signOut={handleSignOutClick}
                 />
              </ProtectedRoute>
            }
          />

          <Route exact path="/sign-up" element={<Register
              onSubmit={handleUserRegister}
          />} />

          <Route exact path="/sign-in" 
          element={<Login
            onSubmit={handleUserAuthorization}
          />} />

          <Route exact path="*" loggedIn={loggedIn} element={<NotFound />} />

        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;