import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FormatDate from '../services/FormatDate';
import axios from 'axios';


import './style/Movie.css';


const Movie = () => {
    const { id } = useParams();
    console.log(id);

    const[movieData, setMovieData] = useState([]);

    const URL = `http://localhost:3000/movies/${id}`;

    useEffect(() => {
        axios.get(URL)
        .then((response) => setMovieData(response.data))
        .catch((err) => console.log(err))},
         [])
        console.log(movieData);
    
    return (
        <div className="movie page">
            <main>
                <section className="detail-movie-container">
                    <div className="detail-movie-container-info">
                        <h2 className="detail-movie-title">{ movieData.title }</h2>
                        <time className="detail-movie-date">Sortie en salle le {FormatDate.DateForm(movieData.release_date)}</time>
                        <div className="detail-movie-categories"> { movieData.categories && movieData.categories.map(( category, index) =>
                            <div key={index} className="detail-movie-category">
                                { category }
                            </div>                        
                            ) }
                        </div>
                        <p className="detail-movie-description">{ movieData.description }</p>
                        <ul className="list-actors">
                            { movieData.actors && movieData.actors.map(({ character, name, photo }, index) => (                            
                                <li key={ index } className="actor-details">
                                    <div>
                                        <p className="actor-character">{ character }</p>
                                        <p className="actor-name">{ name }</p>
                                    </div>   
                                    <img src={ photo } alt={ name }  className="actor-photo"/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="detail-movie-container-img">
                        <img src={ movieData.poster } alt={`Affiche du film ${movieData.title}`} className="detail-movie-img" />
                        <div className="detail-movie-card-buttons">
                        <button type="button" className="edit-btn">Modifier</button>
                        <button type="button" className="delete-btn">Supprimer</button>
                        </div>
                    </div>    
                </section>
                <section className="similar-movies-container">
                    <h2>Films similaires</h2>
                    <div className="similar-movies">
                        { movieData.similar_movies && movieData.similar_movies.map(({title, release_date, poster}, index) => 
                        // <MovieCard movie={ movie } key={ movie.id } />
                        <div key={ index } className="similar-movie">
                            <h2>{ title }</h2>
                            <time>{ FormatDate.DateForm(release_date) }</time>
                            <img src={ poster } alt={ title }/>
                        </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Movie;