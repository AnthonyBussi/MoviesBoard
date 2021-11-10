import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
            <Header />
                <main className="detail-movie-container">
                    <div className="detail-movie-container-info">
                        <h2 className="detail-movie-title">{ movieData.title }</h2>
                        <time className="detail-movie-date">{FormatDate.DateForm(movieData.release_date)}</time>
                        <p className="detail-movie-description">{ movieData.description }</p>
                    </div>
                    <div className="detail-movie-container-img">
                        <img src={ movieData.poster } alt={`Affiche du film ${movieData.title}`} className="detail-movie-img" />
                        <div className="detail-movie-card-buttons">
                            <button type="button">Modifier</button>
                            <button type="button">Supprimer</button>
                        </div>
                    </div>    
                </main>
            <Footer />
        </div>
    );
};

export default Movie;