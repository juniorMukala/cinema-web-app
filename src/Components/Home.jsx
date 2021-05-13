import React, { useEffect, useState } from 'react';
const Home = () => {
const[genre, setGenre]=useState([])
/* console.log(genre); */
useEffect(()=>{
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US")
    .then((data)=>{
        /* console.log("données : ",data); */
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
        <div className="card text-center row ">
            {genre.map((category)=>{
                return(
            <div className="card text-center  ">
                <div className="bg-image " >
                    {category.name}
                </div>
            {/* <div class="card-body">
                <p class="card-title">{popularActor.name}</p>
                <p class="card-text">{popularActor.profile_path}</p>
            </div> */}
        </div> 
                )
            })}
        </div>
    );
};

export default Home;