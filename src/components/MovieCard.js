import React from 'react';
import { Link } from 'react-router-dom';
import './style/MovieCard.css';
import FormatDate from '../services/FormatDate';

const Card = ( { movie } ) => {

    const movieId = movie.id;

    return (
        <div className="movie-card">
            <Link to={`movies/${movieId}`} className="movie-link">
                <h2 className="movie-title">{ movie.title }</h2>
                <time className="movie-date">{FormatDate.DateForm(movie.release_date)}</time>
                <img src={ movie.poster } alt={`Affiche du film ${movie.title}`} className="movie-img" />
                <p className="movie-description">{ movie.description }</p>
                <p className="movie-categories">{ movie.categories.join(' - ') }</p>
            </Link>
                <div className="movie-card-buttons">
                    <button type="button" className="edit-btn">Modifier</button>
                    <button type="button" className="delete-btn">Supprimer</button>
                </div>
        </div>
    );
}


export default Card;