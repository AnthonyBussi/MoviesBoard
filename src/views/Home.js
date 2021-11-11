import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

import './style/Home.css';


const Home = () => {
    const[movieData, setMovieData] = useState([]);
    const[error, setError] = useState('');

    const URL = "http://localhost:3000/movies"

    useEffect(() =>{
        axios.get(URL)
        .then((response) => setMovieData(response.data))
        .catch((err) => setError(`<p>Erreur : Impossible d'afficher un résultat</p>`))
        }, [])
        console.log(movieData);

    return (
        <div className="home page">
            <main className="home-container">
                <section className="home-form">
                    <h2>Rechercher un film</h2>
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
                </section>
                <section className="home-results">  
                    { error }
                    {movieData.map(movie => <MovieCard movie={ movie } key={ movie.id }  />)}
                </section>
            </main>
        </div>
    );
};

export default Home;