import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router';
import axios from 'axios';


import './style/Home.css';


const Movie = () => {

    const movieId = useParams().id;
    console.log(movieId);
    
    return (
        <div className="details page">
            <Header />
            <main className="details-container">
                
            </main>
            <Footer />
        </div>
    );
};

export default Movie;