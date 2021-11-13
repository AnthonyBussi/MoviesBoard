import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/Header.css';
import Navbar from '../components/Navbar';
import Logo from '../assets/popcorn.png'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo de l'application" className="logo" />
            <NavLink to='/'>
                <h1>MoviesBoard</h1>
            </NavLink>
            <Navbar />
        </header>
    );
};

export default Header;