import React from 'react';
import './style/Header.css';
import Navbar from '../components/Navbar';
import Logo from '../assets/popcorn.png'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Logo de l'application" className="logo" />
            <h1>MoviesBoard</h1>
            <Navbar />
        </header>
    );
};

export default Header;