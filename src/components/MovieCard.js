import React from 'react';
import './style/MovieCard.css';

const Card = (data) => {

    const movieData = data.movieData[0];

    return (
        <div className="card">
            { movieData && (

            <div>
                <h2 className="movie-title">{ movieData.title }</h2>
                <img src={ movieData.poster } alt="" className="movie-img" />
                <p className="movie-date">{ movieData.release_date }</p>
                <p className="movie-place">{ movieData.description }</p>
                <button type="button">Modifier</button>
                <button type="button">Supprimer</button>
            </div>
            )}
        </div>
    );
}


export default Card;