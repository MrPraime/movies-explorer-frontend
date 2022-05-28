import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/header/logo.svg';
import Menu from './Menu';


function Header(props) {
    const { pathname } = useLocation();

return (
    <header  className={'header'}>

    {pathname == '/' ? ( 
              <><Link to={"/"}>
                   <img src={logo} alt="Логотип" className="header__logo" />
               </Link>
               <div className="header__container">
                       <Link to={"sign-up"} className="header__singUp">
                           <p>Регистрация</p>
                       </Link>
                       <Link to={"sign-in"} className="header__singIn">
                           <p>Войти</p>
                       </Link>
                   </div>
                   </> 
        ) :  ( 
            (pathname !== '/profile' || pathname !== '/movies' || pathname !== "saved-movies") && 
           
                <>           
                 <div className="header__container_left">
                    <Link to={"/"}>
                        <img src={logo} alt="Логотип" className="header__logo" />
                    </Link>
                    <Link to={"/movies"} className="header__text">
                                <p>Фильмы</p>
                    </Link>
                    <Link to={"/saved-movies"} className="header__text">
                                <p>Сохранённые фильмы</p>
                    </Link>
             </div>


            <div className="header__container_right">
                <Link to={"/profile"} className="header__account">
                    <button className="header__account">Аккаунт</button>
                </Link>
            <Menu       
                    isLoggedIn={props.isLoggedIn}
                />
            </div>

        </>



        )} 

</header>
   );

 }
  
export default Header;