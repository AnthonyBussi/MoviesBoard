import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import './style/Edit.css';

const Edit = () => {
    
    const { id } = useParams();
    const [movie, setMovie] = useState('');
    

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then((response) => setMovie(response.data))
            .catch(error => console.log(error))
            console.log(movie.title);
    }, [id]);

    return (
        <div className="edit page">
            <main>
                <h2>Modifier le film</h2>
                <section>
                    <form className="form-edit-movie">
                        <div className="form-edit-movie-filters">
                            <div className="form-edit-movie-filter">
                                <label htmlFor="title">Titre</label>
                                <input type="text" 
                                       name="title"
                                       defaultValue={movie.title}
                                       required />
                            </div>
                            <div className="form-edit-movie-filter">
                                <label htmlFor="date">Date de sortie</label>
                                <input type="date" 
                                       name="date"
                                       defaultValue={movie.release_date}
                                       required />
                            </div>
                            <div className="form-edit-movie-filter">
                                <label htmlFor="categories">Catégories</label>
                                <input type="text"
                                       name="categories" 
                                       placeholder="Action, Aventure, Science-Fiction, etc."
                                       required />
                            </div>
                            <div className="form-edit-movie-filter">
                                <label htmlFor="description">Description</label>
                                <input type="textarea" 
                                       name="description" 
                                       defaultValue={movie.description}
                                       required />
                            </div>
                            <div className="form-edit-movie-filter">
                                <label htmlFor="poster">Affiche</label>
                                <input type="url" 
                                       name="poster" 
                                       defaultValue={movie.poster}
                                       required />
                            </div>
                            <div className="form-edit-movie-filter">
                                <label htmlFor="backdrop">Backdrop</label>
                                <input type="url" 
                                       name="backdrop" 
                                       defaultValue={movie.backdrop}
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
                        <button className="form-edit-movie-validate">Modifier</button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Edit;