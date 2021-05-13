import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ movie, popularActor, onClick, keys }) => {
  const urlImage = "https://image.tmdb.org/t/p/w1280";
  return (
    <div
      className="card text-center shadow-0 m-3 "
      onClick={(event) => {
        onClick(keys);
      }}
    >
      <div className="bg-image ">
        {movie ? (
          <img
            src={urlImage + movie.backdrop_path}
            class="card-img-top"
            alt="..."
          />
        ) : (
          <img
            src={urlImage + popularActor.profile_path}
            class="card-img-top"
            alt="..."
          />
        )}
      </div>
      <div class="card-body">
        {movie ? <p class="card-title">{movie.original_title}</p> : <p class="card-title">{popularActor.name}</p>}
        {movie ? <p class="card-text">{movie.release_date}</p> : <p class="card-title">{popularActor.known_for_department}</p>}
        {movie ? false: <p class="card-title">{popularActor.popularity}</p>}
      </div>
    </div>
  );
};

export default Card;
