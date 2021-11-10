import React from 'react';
import './style/MovieCard.css';

const Card = (data) => {

    const movieData = data.movieData[0];

    return (
        <a href="#">
            { movieData && (
            <div className="movie-card">
                <h2 className="movie-title">{ movieData.title }</h2>
                <img src={ movieData.poster } alt="" className="movie-img" />
                <img src={ movieData.backdrop } alt="" className="movie-img" />
                <p className="movie-date">{ movieData.release_date }</p>
                <p className="movie-place">{ movieData.description }</p>
                <p className="singlemovie__infos__desc">{movieData.categories.join(' - ')}</p>
                <button type="button">Modifier</button>
                <button type="button">Supprimer</button>
            </div>
            )}
        </a>
    );
}


export default Card;