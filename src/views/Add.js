import React, { useEffect, useState } from 'react';
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
                                       defaultValue="Titre du film"
                                       required />
                            </div>
                            <div className="form-add-movie-filter">
                                <label htmlFor="date">Date de sortie</label>
                                <input type="date" 
                                       name="date"
                                       defaultValue="Date de sortie"
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
                                       defaultValue="Description du film"
                                       required />
                            </div>
                            <div className="form-add-movie-filter">
                                <label htmlFor="poster">Affiche</label>
                                <input type="url" 
                                       name="poster" 
                                       defaultValue="Url de l'affiche du film"
                                       required />
                            </div>
                            <div className="form-add-movie-filter">
                                <label htmlFor="backdrop">Backdrop</label>
                                <input type="url" 
                                       name="backdrop" 
                                       defaultValue="Url de l'image d'arrière plan"
                                       pattern="http://*"
                                       required />
                            </div>
                            <div className="form-add-movie-filter"v>
                                <label>Acteurs:</label>

                            </div>
                            <div className="form-add-movie-filter">
                                <label>Films similaires:</label>

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