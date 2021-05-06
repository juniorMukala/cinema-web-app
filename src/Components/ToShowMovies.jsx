import React from 'react';
import Card from './Card';
import Comando from '../Images/3249497.jpg'

const ToShowMovies = () => {
  return (
    <div className="cardAccueil bg-dark text-white">
                <img
                    src={Comando}
                    class="card-img"
                    alt="..."
                />
    </div>
  );
};

export default ToShowMovies;