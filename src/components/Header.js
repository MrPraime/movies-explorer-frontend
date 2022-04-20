import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/header/logo.svg';
import Menu from './Menu';

// const location = useLocation(); 
// const islocationBasic = location.pathname === "/"; 

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
        ) : ( 
            (pathname !== '/sign-up' || pathname !== '/sign-in') &&
            <div className="header__container">

                
            <Link to={"/"}>
            <img src={logo} alt="Логотип" className="header__logo" />
        </Link>
                <Menu       
                    isLoggedIn={props.isLoggedIn}
                />
</div>
        )} 

        {/* <Link to={"/"}>
        <img src={logo} alt="Логотип" className="header__logo"/> 
        </Link>

        <div className="header__container">
            <Link to={"sign-up"} className="header__singUp">
                <p>Регистрация</p>
            </Link>
            <Link to={"sign-in"} className="header__singIn">
                <p>Войти</p>
          </Link>
        </div> */}

        {/* {
                (pathname !== '/sign-up' || pathname !== '/sign-in') &&
                <Menu       
                    isLoggedIn={props.isLoggedIn}
                />
            } */}

</header>
   );
 }
  
export default Header;
