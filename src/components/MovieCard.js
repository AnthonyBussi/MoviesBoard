import React from 'react';
import './style/MovieCard.css';

function Card() {
    return (
        <div className="card">
            <h2 className="movie-title">Titre du film</h2>
            <img src="" alt="" className="movie-img" />
            <p className="movie-date">Date de sortie</p>
            <p className="movie-place">Description</p>
            <p className="movie-details">Voir en détails</p>
            <button type="button">Modifier</button>
            <button type="button">Supprimer</button>
        </div>
    );
}


export default Card;