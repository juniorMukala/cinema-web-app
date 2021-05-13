import React from 'react';
import{ useState, useEffect} from 'react'

const Actors = () => {
const [popularActors, setpopularActor]=useState([])
console.log(popularActors);
useEffect(()=>{
  fetch("https://api.themoviedb.org/3/person/popular?api_key=423e1233745f7663e4e066e1df2c3a0e&language=en-US&page=1")
  .then((data)=>{
    return data.json()
  })
  .then((array)=>{
    return array.results;
  })
  .then((item)=>{
    setpopularActor(item)
    console.log(item);
  })
},[])
    return (
    <div className="card text-center row ">
        {popularActors.map((popularActor)=>{
          console.log("popular contient : ",popularActor);
          return(
            <div className="card text-center  ">
             <div className="bg-image " >
                <img src={"https://image.tmdb.org/t/p/w1280" + popularActor.profile_path} class="card-img-top" alt="..."/>
            </div>
          {/*   <div class="card-body">
                <p class="card-title">{popularActor.profile_path}</p>
                <p class="card-text">{popularActor.profile_path}</p>
            </div> */}
        </div>
           
           )
        })} 
    </div>
    );
};

export default Actors;