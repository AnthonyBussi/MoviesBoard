import React from 'react';
import Navbar from '../components/Navbar';


const Home = () => {
    return (
        <div className="home page">
            <Navbar />
            <main className="home-container">
                <div className="home-info">
                    <h1 className="home-title">Movies Board</h1>
                    <p>Rechercher un film</p>
                </div>
                <div className="home-event">
                </div>
            </main>
        </div>
    );
};

export default Home;