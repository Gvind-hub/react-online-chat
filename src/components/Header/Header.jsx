import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

import placeholder from '../../assets/img/userPlaceholder.svg'
import './Header.scss'

const Header = ({isAuth, logOut, nickname, photoURL}) => {
    const history = useHistory();
    const onLogOut = () => {
        logOut().then(
            history.push('/')
        )
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <NavLink className="header__title" to='/'>Planktonics</NavLink>
                    {isAuth
                        ? <div className="header__navigation">
                            <NavLink className="header__link" to='/chat/'>Сообщения</NavLink>
                            <div className="header__user">
                                <img className="user-avatar header__user-avatar"
                                     src={photoURL ? photoURL : placeholder} alt="user pic"/>
                                <NavLink className="header__link" to='/profile'>{nickname}</NavLink>
                            </div>
                            <button className="header__logout" onClick={onLogOut}>Logout</button>
                        </div>
                        : <NavLink className="header__link" to='/login'>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
