import React from 'react';
import Card from '../Components/Card';
import Comando from '../Images/3249497.jpg'

const ShowMovies = () => {
  return (
    <div className="cardAccueil bg-dark text-white">
        <img src={Comando} class="card-img" alt="..."/>
    </div>
  );
};

export default ShowMovies;