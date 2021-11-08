import React from 'react';
import './style/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/ajouter'>
                        Ajouter
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;