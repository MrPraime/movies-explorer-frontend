// import { Link, useRouteMatch } from 'react-router-dom';

// export default function Menu(props) {

//     return (
//         <>

//             {
//                 props.isLoggedIn &&
                
//                 <nav className='menu'>
//                     <div class="menu-burger__header">
//                         <span></span>
//                     </div>
                    
//                     <ul className='menu__list'>
//                     <li className='menu__list-item'>
//                             <Link to='./'
//                                 className={"menu__text"
//                                 }
//                             >
//                                 Главная
//                             </Link>
//                         </li>
//                         <li className='menu__list-item'>
//                             <Link to='./movies'
//                                 className={"menu__text"
//                                 }
//                             >
//                                 Фильмы
//                             </Link>
//                         </li>
//                         <li className='menu__list-item'>
//                             <Link to='./saved-movies'
//                                 className={"menu__text"}
//                             >
//                                 Сохраненные фильмы
//                             </Link>
//                         </li>

//                         <li
//                             className='menu__list-item

//                         '>
//                             <Link to='./profile'
//                                 className={"menu__text"
//                                 }
//                             >
//                                 Аккаунт
//                             </Link>
//                         </li>
//                     </ul >
//                 </nav >
//             }
//         </>
//     )
// }




import { Link, useRouteMatch } from 'react-router-dom';

export default function Menu(props) {

    return (
        <><><input id="toggle" type="checkbox"></input><label for="toggle" class="hamburger">
            <div class="burger top-bun"></div>
            <div class="burger meat"></div>
            <div class="burger bottom-bun"></div>
        </label></><div class="nav">
                <div class="nav-wrapper">
                <ul className='menu__list'>
                    <li className='menu__list-item'>
                            <Link to='./'
                                className={"menu__text"
                                }
                            >
                                Главная
                            </Link>
                        </li>
                        <li className='menu__list-item'>
                            <Link to='./movies'
                                className={"menu__text"
                                }
                            >
                                Фильмы
                            </Link>
                        </li>
                        <li className='menu__list-item'>
                            <Link to='./saved-movies'
                                className={"menu__text"}
                            >
                                Сохраненные фильмы
                            </Link>
                        </li>

                        <li
                            className='menu__list-item

                        '>
                            <Link to='./profile'
                                className={"menu__text"
                                }
                            >
                                Аккаунт
                            </Link>
                        </li>
                    </ul >
                </div>
            </div></>
    )
}