import React from 'react';
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './SearchBar';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';

const Accueil = () => {
const [movies, setMovies]=useState([])
/* const [movie, setMovie]=useState(movies) */
useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&page=1")
    .then((data)=>{ 
        return data.json()     
    })
    .then((array)=>{
        return array.results;
    })
    .then((item)=>{
        setMovies(item) 
        console.log(item);
    })
    .catch((error)=>{
    })   
},[])


const handleClick=(keys)=>{
    console.log(movies[keys])
 setMovies([movies[keys]])
    console.log(setMovies);
  }

    return (
        <>
            {/* <div className="cardAccueil bg-dark text-white">
              {  <img src={Ninja} class="card-img" alt="..." />  } 
            </div>  */} 
            <p  className="titlePage">VOUS ETES AU BON ENDROIT, DECOUVREZ LES MEILLEURS TITRES </p> 
            <div className='container'>
                <div className="text">
                    <div className="title">
                        <p>POPULARS</p>
                    </div>
                    <div className="category">
                        <p>SORT</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {   
                        movies.map((movie,index)=>(
                            <Card  movie={movie} Title={movie.original_title} Date={movie.release_date} image={movie.backdrop_path} key={index} keys={index} Click={handleClick}/>
                        ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default Accueil;