import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style/Edit.css';

const Edit = () => {

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
                                       defaultValue="Titre du film"
                                       required />
                            </div>
                            <div className="form-edit-movie-filter">
                                <label htmlFor="date">Date de sortie</label>
                                <input type="date" 
                                       name="date"
                                       defaultValue="Date de sortie"
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
                                       defaultValue="Description du film"
                                       required />
                            </div>
                            <div className="form-edit-movie-filter">
                                <label htmlFor="poster">Affiche</label>
                                <input type="url" 
                                       name="poster" 
                                       defaultValue="Url de l'affiche du film"
                                       required />
                            </div>
                            <div className="form-edit-movie-filter">
                                <label htmlFor="backdrop">Backdrop</label>
                                <input type="url" 
                                       name="backdrop" 
                                       defaultValue="Url de l'image d'arrière plan"
                                       pattern="http://*"
                                       required />
                            </div>
                            <div className="form-edit-movie-filter">
                                <label>Acteurs:</label>

                            </div>
                            <div className="form-edit-movie-filter">
                                <label>Films similaires:</label>

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