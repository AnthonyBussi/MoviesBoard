import React, { useState } from 'react';
import axios from 'axios';

import './style/Add.css';

const Add = () => {    

    const [searchTerm, setSearchTerm] = useState([]);
    const [movieData, setMovieData] = useState([]);
    
    // On récupère la donnée saisie par l'utilisateur
    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=c13e3c8bfa9d391e29d9d0fba7e0902c&language=fr-FR&query=${searchTerm}`;

    const displayResult = (e) => {
        e.preventDefault();
        axios.get(URL)
        .then((response) => {
            setMovieData(response.data.results);
        });
    }

    return (
        <div className="add page">
            <main>
                <h2>Ajouter un film à la bibliothèque</h2>
                <section className="form-container">
                    <form onSubmit={ displayResult }>
                        <input list="movies-datalist"
                               type="text"
                               name="add-searchbar"
                               id="add-searchbar"
                               placeholder="Rechercher un film à ajouter"
                               onInput={ handleSearchTerm }
                        />
                        <button type="submit" name="search-btn" className="form-btn">Rechercher</button>
                        
                        <datalist id="movies-datalist">
                            {/* On affiche ici les résultats fourni par l'API TMDB */}
                            {movieData.map((movieData)=>{
                                return(
                                    <option key={movieData.id} data-id={movieData.id} 
                                    value={movieData.original_title}/>
                                ) 
                            })}
                        </datalist>
                    </form>
                </section>
                <section>
                    <form className="form-add-movie">
                        <div className="form-add-movie-filters">
                            <div className="form-add-movie-filter">
                                <label htmlFor="title">Titre</label>
                                <input type="text" 
                                       name="title"
                                       placeholder="Titre du film"
                                       required />
                            </div>
                            <div className="form-add-movie-filter">
                                <label htmlFor="date">Date de sortie</label>
                                <input type="date" 
                                       name="date"
                                       required />
                            </div>
                            <div className="form-add-movie-filter">
                                <label htmlFor="categories">Catégories</label>
                                <input type="text"
                                       name="categories" 
                                       placeholder="Action, Aventure, Science-Fiction, etc."
                                       required />
                            </div>
                            <div className="form-add-movie-filter">
                                <label htmlFor="description">Description</label>
                                <input type="textarea" 
                                       name="description" 
                                       placeholder="Description du film"
                                       required />
                            </div>
                            <div className="form-add-movie-filter">
                                <label htmlFor="poster">Affiche</label>
                                <input type="url" 
                                       name="poster" 
                                       placeholder="http://exemple-affiche.jpg"
                                       pattern="http://*"
                                       required />
                            </div>
                            <div className="form-add-movie-filter">
                                <label htmlFor="backdrop">Arrière-plan</label>
                                <input type="url" 
                                       name="backdrop" 
                                       placeholder="http://exemple-arriere-plan.jpg"
                                       pattern="http://*"
                                       required />
                            </div>
                            <div className="form-add-movie-filter">
                                <p>Casting :</p>
                                <div className="form-actor">
                                    <div className="filter">
                                        <label htmlFor="actor">Acteur / Actrice</label>
                                        <input type="text" 
                                            name="actor"
                                            placeholder="Nom de l'acteur / actrice"
                                            required />
                                    </div>
                                    <div className="filter">
                                        <label htmlFor="poster">Photo</label>
                                        <input type="url" 
                                                name="poster" 
                                                placeholder="http://exemple-photo.jpg"
                                                pattern="http://*"
                                                required />
                                    </div>
                                    <div className="filter">
                                        <label htmlFor="actor">Rôle</label>
                                        <input type="text" 
                                            name="actor"
                                            placeholder="Rôle"
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-add-movie-filter">
                                <p>Films similaires :</p>
                                <div className="form-similar-movies">
                                    <div className="filter">
                                        <label htmlFor="title-similar-movie">Titre</label>
                                        <input type="text" 
                                            name="title-similar-movie"
                                            placeholder="Titre du film"
                                            required />
                                    </div>
                                    <div className="filter">
                                        <label htmlFor="poster-similar-movie">Affiche</label>
                                        <input type="url" 
                                                name="poster-similar-movie" 
                                                placeholder="http://exemple-poster.jpg"
                                                pattern="http://*"
                                                required />
                                    </div>
                                    <div className="filter">
                                        <label htmlFor="date-similar-movie">Date de sortie</label>
                                        <input type="date" 
                                            name="date-similar-movie"
                                            required />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <button className="form-add-movie-validate">Valider</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Add;