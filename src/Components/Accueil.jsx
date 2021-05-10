import React from 'react';
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './SearchBar';
/* import Ninja from "../Images/3626966.jpg"; */
import Header from './Header';
import Card from './Card';
import Footer from './Footer';

const Accueil = () => {
const [movies, setMovie]=useState([])
console.log(movies);
useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&page=1")
    .then((data)=>{ 
        return data.json()     
    })
    .then((array)=>{
        return array.results;
    })
    .then((item)=>{
        setMovie(item) 
        console.log(item);
    })
    .catch((error)=>{
    })   
},[])

    return (
        <>
            <div className="cardAccueil bg-dark text-white">
              {/*   <img src={Ninja} class="card-img" alt="..." />   */} 
            </div>  
            <p  className="messageAccueil">VOUS ETES AU BON ENDROIT, VOICI LES MEILLEURS FILMS POPULAIRES PROPOSÉS</p> 
            <div className='container'>
            <div className="text">
                <div className="titre">
                    <p>POPULARMOVIES</p>
                </div>
                <div className="category">
                    <p>Sort</p>
                </div>
                </div>
                <div className="row justify-content-center">
                        {   
                            movies.map((movie)=>(
                                    <Card  movie={movie}/>
                        ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Accueil;