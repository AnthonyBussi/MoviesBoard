import React from 'react';
import axios from 'axios';
import './style/DeleteBtn.css';

const DeleteBtn = ({ id }) => {
    const handleDelete = () =>{
        axios.delete('http://localhost:3001/movies/' + id).then((response) => response.data);
        window.location.reload();
        // console.log("test suppression");
    };

    return (
            <button className="delete-btn" onClick={() =>{
                if (window.confirm('Le film sera retiré de votre bibliothèque ! Confirmer la suppression ?')) {
                    handleDelete();
                }
            }}>
                Supprimer
            </button>
    );
};

export default DeleteBtn;