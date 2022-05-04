import { React, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Movies from './Movies'
import Footer from './Footer'
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import SavedMovies from './SavedMovies';
import Preloader from './Preloader'
import NotFound from './NotFound';


function App() {

  const [isLoggedIn] = useState(true);
  const [isLoading] = useState(false);

  const headerPathList = [
    '/', '/movies', '/saved-movies', '/profile'
  ];
  const footerPathList = [
    '/', '/movies', '/saved-movies'
  ];

 return (
  <div className="page">
          {/* <Preloader
            isLoading={isLoading}
          /> */}

    {
        useRouteMatch({ path: headerPathList, exact: true }) &&
        <Header
          isLoggedIn={isLoggedIn}
        />
      }

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>

        <Route path='/movies'>
          <Movies />
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/sign-up'>
          <Register />
        </Route>

        <Route path='/sign-in'>
          <Login/>
        </Route>


        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>

      {
        useRouteMatch({ path: footerPathList, exact: true }) &&
        <Footer />
      }
    </div>
   );
}

export default App;

