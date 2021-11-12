import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style/Add.css';

const Add = () => {    

    const [searchTerm, setSearchTerm] = useState([]);
    
    // On récupère la donnée saisie par l'utilisateur
    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=c13e3c8bfa9d391e29d9d0fba7e0902c&language=fr-FR&query=${searchTerm}`;

    const displayResult = (e) => {
        e.preventDefault();
        axios.get(URL)
        .then((response) => {
            console.log(response);
        });
    }

    return (
        <div className="add page">
            <main>
                <section className="form-container">
                    <form onSubmit={displayResult}>
                        <input type="text"
                            name="add-searchbar"
                            id="add-searchbar"
                            placeholder="Rechercher un film"
                            onInput={handleSearchTerm}
                        />
                        <button type="submit" name="search-btn" className="form-btn">Rechercher</button>
                    </form>
                </section>
                <section>
                </section>
            </main>
        </div>
    );
};

export default Add;