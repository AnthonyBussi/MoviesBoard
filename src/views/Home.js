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
                    {/* <form>
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
                    </form> */}
                    <form>
                        <div className="home-form-filters">
                            <div className="home-form-filter">
                                <label for="home-filter-name">Film</label>
                                <input type="text" id="home-filter-name" className="home-filter-name" placeholder="Nom du film"></input>
                            </div>
                            <div className="home-form-filter">
                                <label for="home-filter-cat">Catégorie</label>
                                <select id="home-filter-cat" className="home-filter" name="home-filter-cat">
                                    <option value="action">Action</option>
                                    <option value="aventure">Aventure</option>
                                    <option value="thriller">Thriller</option>
                                    <option value="fantastique">Fantastique</option>
                                    <option value="drame">Drame</option>
                                </select>
                            </div>
                            <div className="home-form-filter">
                                <label for="home-filter-date">Date de sortie</label>
                                <input
                                    type="date"
                                    id="home-filter-date"
                                    name="home-filter"
                                    value="2021-15-11"
                                    className="home-filter-date"
                                />
                            </div>
                        </div>
                        <button className="search-btn" name="search-btn" type="submit">
                            Rechercher
                        </button>
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