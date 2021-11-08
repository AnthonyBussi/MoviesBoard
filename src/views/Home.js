import React from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';

import './style/Home.css';


const Home = () => {
    return (
        <div className="home page">
            <header>
                <h1>
                    MoviesBoard
                </h1>
                <Navbar />
            </header>
            <main className="home-container">
                <div className="home-info">
                    <h1 className="home-title">Movies Board</h1>
                    <p>Rechercher un film</p>
                </div>
                <div className="home-event">
                    <MovieCard />
                </div>
            </main>
        </div>
    );
};

export default Home;