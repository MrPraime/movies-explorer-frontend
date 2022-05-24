import { Link, useNavigate  } from 'react-router-dom';

export default function Menu(props) {

    return (
        <><><input id="toggle" type="checkbox"></input><label htmlFor="toggle" className="hamburger">
            <div className="burger top-bun"></div>
            <div className="burger meat"></div>
            <div className="burger bottom-bun"></div>
        </label></><div className="nav">
                <div className="nav-wrapper">
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