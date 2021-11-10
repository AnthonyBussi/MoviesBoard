import React from 'react';
import './style/MovieCard.css';
import FormatDate from '../services/FormatDate';

const Card = (data) => {

    const movieData = data.movieData[0];

    return (
        <div className="movie-card">
            { movieData && (
            <a href="#" className="movie-link">
                <h2 className="movie-title">{ movieData.title }</h2>
                <time className="movie-date">{FormatDate.DateForm(movieData.release_date)}</time>
                <img src={ movieData.poster } alt="Affiche du film" className="movie-img" />
                <p className="movie-description">{ movieData.description }</p>
                <p className="movie-categories">{ movieData.categories.join(' - ') }</p>
                <div className="movie-card-buttons">
                    <button type="button">Modifier</button>
                    <button type="button">Supprimer</button>
                </div>
            </a>
            )}
        </div>
    );
}


export default Card;