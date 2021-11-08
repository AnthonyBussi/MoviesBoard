import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import axios from 'axios';


import './style/Home.css';


const Home = () => {
    const[movieData, setMovieData] = useState([]);

    const URL = "http://localhost:3000/movies"

    useEffect(() =>{
        axios.get(URL)
        .then((response) => setMovieData(response.data));
        }, [])
        console.log(movieData);
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
                    <form>
                        <select name="home-filter">
                            <option value="">Filtrer par</option>
                            <option value="title">Titre</option>
                            <option value="date">Date de sortie</option>
                            <option value="category">Catégorie</option>
                        </select>
                         <input type="text"
                                className="home-searchbar"
                                id="home-searchbar"
                                placeholder="Rechercher un film..."
                         />
                         <button type="submit" name="search-btn" className="search-btn">Rechercher</button>
                     </form>
                     {movieData && <MovieCard movieData={ movieData }  />}
                </div>
                
            </main>
        </div>
    );
};

export default Home;