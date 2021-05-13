import React, { useEffect, useState } from 'react';
const Genre_Movies = () => {
const[genre, setGenre]=useState([])
useEffect(()=>{
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US")
    .then((data)=>{
        return data.json()
    })
    .then((array)=>{
        return array.genres
    })
    .then((item)=>{
        setGenre(item)
    })
},[])
    return (
        <div className="category">
            {genre.map((category)=>{
                return(
                <div className="categoryMovies" >
                    {category.name}
                </div>
       
                )
            })}
        </div>
    );
};

export default Genre_Movies;