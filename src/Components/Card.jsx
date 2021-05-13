import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = ({movie, index, Click, keys}) => {   
const urlImage = "https://image.tmdb.org/t/p/w1280";
   if (movie) {
    return(
        <div className="card text-center border border-primary shadow-0 m-3 " onClick={(event) => {Click(keys)}} >
            <div className="bg-image " >
                <img src={ urlImage + movie.backdrop_path} class="card-img-top" alt="..."/>
            </div>
            <div class="card-body">
                <p class="card-title">{movie.original_title}</p>
                <p class="card-text">{movie.release_date}</p>
            </div>
        </div>
       ) 
    }else{
        return(
            <div className="card text-center border border-primary shadow-0 m-3 " onClick={(event) => {Click(keys)}}>
        <div className="bg-image " >
            <img src={ urlImage + movie.backdrop_path} class="card-img-top" alt="..."/>
        </div>
        <div class="card-body">
            <p class="card-title">AMIS DU CALVAIRE</p>
            <p class="card-text">DIEU VOUS BENISSE</p>
        </div>
    </div>
        )  
    }   
}

export default Card;