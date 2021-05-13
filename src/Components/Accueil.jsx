import React from 'react';
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './SearchBar';
import Ninja from "../Images/3626966.jpg";
import NavBar from './NavBar';
import Card from './Card';

const Accueil = () => {
const [movies, setMovie]=useState([])
/* console.log(movies); */
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
    })
    .catch((error)=>{
        console.log(error);
    })
    
},[])

let actionMovie= [], 
adventureMovie= [], 
animationMovie= [], 
comedyMovie= [], 
crimeMovie= [], 
documentaryMovie= [], 
dramaMovie= [], 
familyMovie= [], 
fantasyMovie= [], 
historyMovie= [], 
hororMovie= [], 
warMovie= [], 
mysteryMovie= [], 
romanceMovie= [], 
scienceFictionMovie= []; 

    
movies.map((movie)=>{
    for(const Id of movie.genre_ids){
        if(Id==28){
            actionMovie.push(movie)
            console.log(actionMovie);
        }
        if (Id==12){
           adventureMovie.push(movie) 
          
          
        }
        if (Id==16) {
            animationMovie.push(movie)
          
            
        }
        if (Id==35) {
            comedyMovie.push(movie)
           
        }
        if (Id==80) {
           crimeMovie.push(movie) 
           
        }
        /* if (Id==99) {
            documentaryMovie.push(movie)
           
        } */
        if (Id==18) {
            dramaMovie.push(movie)
           
        }
        if (Id==10751) {
           familyMovie.push(movie) 
           
        }
        if (Id==14) {
            fantasyMovie.push(movie)
           
        }
        /* if (Id==36) {
            historyMovie.push(movie)
            
        } */
        if (Id==27) {
            hororMovie.push(movie)
           
        }
        if (Id==10752) {
            warMovie.push(movie)
            
        }
       /*  if (Id==9648) {
            mysteryMovie.push(movie)
           
        } */
        /* if (Id==10749) {
            romanceMovie.push(movie)
           
        } */
        if (Id==878) {
            scienceFictionMovie.push(movie)
           
        }
       
    }
})

    return (
        <>
            <div className="cardAccueil bg-dark text-white">
                <img
                    src={Ninja}
                    class="card-img"
                    alt="..." 
                />   
            </div>  
            <p  className="messageAccueil">VOUS ETES AU BON ENDROIT, VOICI LES MEILLEURS FILMS PROPOSÉS</p> 
            <div className="row">
                <div className="col-sm-10 col-md-3 m-0">
                    <Card movie={actionMovie} />
                </div>
                <div className="col-sm-10 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-10 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-10 col-md-3 m-0">
                    <Card movie={romanceMovie}/>
                </div>
                <div className="col-sm-10 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-10 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-10 col-md-3 m-0">
                    <Card />
                </div>
                <div className="col-sm-10 col-md-3 m-0">
                    <Card />
                </div>
            </div>
        </>
    );
};

export default Accueil;