import React from 'react';
import {NavLink} from "react-router-dom";

import './NavBar.scss'

const NavBar = () => {
    return (
        <div className="navbar">
            <ul className="navbar__list">
                <li className="navbar__element">
                    <NavLink className="navbar__link" to="/chat/work">Работа</NavLink>
                </li>

                <li className="navbar__element">
                    <NavLink className="navbar__link" to="/chat/flud">Флудилка</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
