import React from 'react';
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './SearchBar';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import Home from './Home';

const Accueil = () => {
const [movies, setMovies]=useState([])
const [search, setSearch]=useState(movies);
const [newArray, setArray] = useState([])
useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&page=1")
    .then((data)=>{ 
        console.log(data);
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

const submit=(e)=>{
e.preventDefault();
fetch(`https://api.themoviedb.org/3/search/movie?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&query=${search}`)
    .then(res=>res.json()).then(movies=>{
       setMovies(movies.results)
   })   
}
const handleClick=(keys)=>{
    console.log(movies[keys])
    setMovies([movies[keys]])
  }
const onChange=(search)=>{
   console.log(search.target.value)
   setSearch(search.target.value)
}
    return (
        <>
        <form action="" onSubmit={submit}>
           <SearchBar onChange={onChange} />
        </form>
            {/* <div className="cardAccueil bg-dark text-white">
              {  <img src={Ninja} class="card-img" alt="..." />  } 
            </div>  */}
        <Home/>     
            <p  className="titlePage">DECOUVREZ LES MEILLEURS TITRES </p> 
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
export default Accueil